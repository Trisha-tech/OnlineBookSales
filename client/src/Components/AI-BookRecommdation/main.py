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

