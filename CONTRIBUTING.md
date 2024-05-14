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

### Alternatively contribute using GitHub Desktop

1. **Open GitHub Desktop:**
   Launch GitHub Desktop and log in to your GitHub account if you haven't already.

2. **Clone the Repository:**
   - If you haven't cloned the ResourceHub repository yet, you can do so by clicking on the "File" menu and selecting "Clone Repository."
   - Choose the ResourceHub repository from the list of repositories on GitHub and clone it to your local machine.

3. **Switch to the Correct Branch:**
   - Ensure you are on the branch that you want to submit a pull request for.
   - If you need to switch branches, you can do so by clicking on the "Current Branch" dropdown menu and selecting the desired branch.

4. **Make Changes:**
   Make your changes to the code or files in the repository using your preferred code editor.

5. **Commit Changes:**
   - In GitHub Desktop, you'll see a list of the files you've changed. Check the box next to each file you want to include in the commit.
   - Enter a summary and description for your changes in the "Summary" and "Description" fields, respectively. Click the "Commit to <branch-name>" button to commit your changes to the local branch.

6. **Push Changes to GitHub:**
   After committing your changes, click the "Push origin" button in the top right corner of GitHub Desktop to push your changes to your forked repository on GitHub.

7. **Create a Pull Request:**
   - Go to the GitHub website and navigate to your fork of the ResourceHub repository.
   - You should see a button to "Compare & pull request" between your fork and the original repository. Click on it.

8. **Review and Submit:**
   - On the pull request page, review your changes and add any additional information, such as a title and description, that you want to include with your pull request.
   - Once you're satisfied, click the "Create pull request" button to submit your pull request.

9. **Wait for Review:**
   Your pull request will now be available for review by the project maintainers. They may provide feedback or ask for changes before merging your pull request into the main branch of the ResourceHub repository.

⭐️ Support the Project
If you find this project helpful, please consider giving it a star on GitHub! Your support helps to grow the project and reach more contributors.
