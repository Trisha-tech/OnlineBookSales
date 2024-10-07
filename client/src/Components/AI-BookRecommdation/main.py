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


