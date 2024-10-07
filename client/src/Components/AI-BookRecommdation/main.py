#!/usr/bin/env python
# coding: utf-8

import json
import logging
import os
import time

import requests
import tomli
from bs4 import BeautifulSoup
from fake_useragent import UserAgent
from langchain.callbacks.streaming_stdout import StreamingStdOutCallbackHandler
from langchain.chat_models import ChatOpenAI
from langchain.schema import HumanMessage, SystemMessage

# Creating a random user agent
ua = UserAgent()

# Loading configuration from TOML file
with open("config.toml", mode="rb") as fp:
    config = tomli.load(fp)

# Setting up logging with basic configuration
logging.basicConfig(
    level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s"
)
logger = logging.getLogger()

# Creating logs directory if it doesn't exist
if not os.path.exists("logs"):
    os.makedirs("logs")

# Creating unique log filename with timestamp
timestamp = time.strftime("%Y%m%d-%H%M%S")
filename = f"logs/{timestamp}.log"


def append_text_to_file(filename, text):
    """Function to append text to the end of a file."""
    with open(filename, "a") as file:
        file.write(text)


def extract_text(book, tag, class_name):
    """
    This function extracts text from a given HTML tag with a given class within the
    BeautifulSoup object of the book's HTML.
    """
    try:
        container = book.find(tag, class_=class_name)
        if container:
            return container.text
    except Exception as e:
        logger.error(
            f"[!] Error while extracting '{tag}' with class '{class_name}': {str(e)}"
        )
        return None


def fetch_html_content(link):
    """Fetches the HTML content of a webpage."""
    logger.info(f"[+] Fetching book synopsis for link: {link}...")
    # Headers to mimic a browser visit
    headers = {
        "User-Agent": ua.firefox,
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
        "Accept-Encoding": "gzip, deflate, br",
        "DNT": "1",
        "Connection": "keep-alive",
        "Upgrade-Insecure-Requests": "1",
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-User": "?1",
    }
    try:
        response = requests.request("GET", link, headers=headers)
        return response.text
    except requests.exceptions.RequestException as e:
        logger.error("Failed to fetch HTML content due to: %s", e)


def get_book_author_pairs():
    """Extracts book and author pairs from the config file."""
    book_author_pairs = []
    for book in config["books"]["favorites"].splitlines():
        title, author = book.strip().split(",")
        book_author_pairs.append((title, author))
    return book_author_pairs


