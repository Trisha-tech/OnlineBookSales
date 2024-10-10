## Description **📚**

The AI Book Recommender 🤖 works by interacting with two main components: Goodreads 📖 for fetching book data, and OpenAI's ChatGPT for generating recommendations.

- **Goodreads :** We're using Goodreads to fetch details about your favorite books 📚, including the book title, author, genres, and synopsis. The script then extracts this data and uses it to generate personalized book recommendations.

- **OpenAI's ChatGPT :** We're using ChatGPT to generate book recommendations based on the book data fetched from Goodreads . We feed ChatGPT with a conversation context where the user talks about their favorite books (the data fetched from Goodreads). The AI then responds with book recommendations in a conversational manner.


### Getting Started 🚀

1. Clone this repository on your local machine.

```bash
git clone https://github.com/ArpitaAgrahari/OnlineBookSales.git
```

2. Navigate to the repository.

```bash
cd https://github.com/ArpitaAgrahari/OnlineBookSales.git
```

3. Create a Python virtual environment and activate it.

```bash
python3 -m venv venv
source venv/bin/activate
```

4. Install the necessary dependencies.

```bash
 pip install -r requirements.txt
```

5. Rename the `sample.config.toml` file to `config.toml`:

```bash
mv sample.config.toml config.toml
```

6. Open the `config.toml` file and update your OpenAI API key in the appropriate field.

7. Update your favorite books info in the `config.toml` file. Follow the provided format and add the titles and authors of your favorite books.

```toml
[books]
favorites = """
Book Title, Author
Book Title, Author
Book Title, Author
"""
```

8. Run the `main.py` script:

```
python3 main.py
```

9. The script gives reading recommendations based on your favorite books. The suggestions are also saved in the `logs` folder.

## Configuration ⚙️

The configuration file, `config.toml`, has various settings used by the script:

- OpenAI settings, including the model name, temperature, and API key 🌡️.
- A list of your favorite books 📚.
- Message templates used when interacting with ChatGPT 💌.
