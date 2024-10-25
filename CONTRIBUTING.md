# How to Contribute 🚀

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
    cd OnlineBookSales
    ```

7. **Add a reference (remote) to the original repository**:
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
    git add . <files_that_you_made_changes>
    ```

14. **Commit your changes**:
    ```bash
    git commit -m "relevant message"
    ```

15. **Push the committed changes** in your feature branch to your remote repository.

---

### Alternatively Contribute Using GitHub Desktop

1. **Open GitHub Desktop:**  
   Launch GitHub Desktop and log in to your GitHub account if you haven't already.

2. **Clone the Repository:**  
   - If you haven't cloned the OnlineBookSales repository yet, you can do so by clicking on the "File" menu and selecting "Clone Repository."
   - Choose the OnlineBookSales repository from the list of repositories on GitHub and clone it to your local machine.

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
   - Go to the GitHub website and navigate to your fork of the OnlineBookSales repository.
   - You should see a button to "Compare & pull request" between your fork and the original repository. Click on it.

8. **Review and Submit:**  
   - On the pull request page, review your changes and add any additional information, such as a title and description, that you want to include with your pull request.
   - Once you're satisfied, click the "Create pull request" button to submit your pull request.

9. **Wait for Review:**  
   Your pull request will now be available for review by the project maintainers. They may provide feedback or ask for changes before merging your pull request into the main branch of the OnlineBookSales repository.

⭐️ Support the Project  
If you find this project helpful, please consider giving it a star on GitHub! Your support helps to grow the project and reach more contributors.

---

# Contributing to OnlineBookSales

First off, thanks for taking the time to contribute! 🎉

The following is a set of guidelines for contributing to OnlineBookSales. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

## Reporting Issues

### Before You Submit an Issue

1. Check the existing issues to see if your issue has already been reported. Duplicate issues clutter the issue tracker and make it harder for us to prioritize issues.

2. Search through open and closed issues to see if your issue has already been addressed.

3. Review the project documentation to ensure your issue hasn't already been covered.

### How to Submit an Issue

1. Use a clear and descriptive title for the issue to identify the problem.

2. Describe the exact steps to reproduce the problem. Include code snippets or links to a repository, if applicable.

3. Explain the expected behavior and what actually happens.

4. Include any relevant logs or screenshots that can help us understand and reproduce the issue.

5. (Optional) Mention the version of the software you're using and the environment (e.g., operating system, browser) where the issue occurs.

## Pull Requests

### Before You Submit a Pull Request

1. Ensure that your changes are aligned with the project's goals and codebase.

2. Write clear and concise commit messages and add the issue number where you were assigned the task (for clarity).

3. Test your changes thoroughly.

4. Update the documentation if your changes require it.

5. Ensure there are no merge conflicts with the base branch.

6. Only submit a pull request for issues that have been assigned to you or if the issue is not assigned to anyone else. Someone else might be working on an issue that has been assigned to them, so it’s important to avoid duplicating efforts.

### Submitting a Pull Request

1. Create a new branch for your work.

2. Make your changes on this branch.

3. Commit your changes with a clear message.

4. Push your changes to your fork on GitHub.

5. Create a pull request from your fork's branch to the original repository's main branch.

6. Provide a detailed description of your changes in the pull request.

---

## Best Practices

- **Communicate:** Keep the team informed about your progress and any challenges you face.
- **Stay Organized:** Use clear commit messages and branch names to maintain a clean project history.
- **Respect the Codebase:** Follow the established coding practices and structure of the project.

## Code Style Guidelines

- **Indentation:** Use 2 spaces for indentation.
- **Variable Naming:** Use camelCase for variable names and PascalCase for class names.
- **Commenting:** Write clear comments for complex logic, and document your code using comments and Markdown where appropriate.

## Acknowledgments

We appreciate all contributions to this project! Your efforts make a significant difference. Special thanks to our contributors for their hard work and dedication.

---