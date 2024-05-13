# How to Contribute

We warmly welcome all those who wish to contribute to **Online Book Sales**. Whether you're looking to add a new feature or fix a bug, your help is greatly appreciated. Follow the steps below to start contributing:

## Getting Started

1. **Create a folder** at your desired location (usually on your desktop).

2. **Open Git Bash** in the new folder.

3. **Initialize a Git repository** by running the command:
    ```bash
    git init
    ```

## Forking and Cloning the Repository

4. **Fork the repository** on GitHub.

5. **Clone your forked repository** of the project using:
    ```bash
    git clone https://github.com/<your_username>/OnlineBookSales.git
    ```

## Setting Upstream and Updating Your Fork

6. **Navigate to the project directory**:
    ```bash
    cd FunwithScience
    ```

7. **Add a reference(remote) to the original repository**:
    ```bash
    git remote add upstream https://github.com/Trisha-tech/OnlineBookSales.git
    ```

8. **Check the remotes for this repository**:
    ```bash
    git remote -v
    ```

9. **Update your fork** with the latest changes from the upstream repository:
    ```bash
    git pull upstream main
    ```

## Making Changes

10. **Create a new branch** (prefer a branch name that relates to your assigned issue):
    ```bash
    git checkout -b <YOUR_BRANCH_NAME>
    ```

11. **Make your desired changes** to the code base.

12. **Check your changes**:
    ```bash
    git status
    git diff
    ```

13. **Stage your changes**:
    ```bash
    git add . <\files_that_you_made_changes>
    ```

14. **Commit your changes**:
    ```bash
    git commit -m "relevant message"
    ```

15. **Push the committed changes** in your feature branch to your remote repository.