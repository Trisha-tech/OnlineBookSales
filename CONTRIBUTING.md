How to Contribute 🚀
We warmly welcome all those who wish to contribute to Online Book Sales! Whether you're looking to add a new feature or fix a bug, your help is greatly appreciated. Follow the steps below to start contributing:

Getting Started
Create a folder at your desired location (usually on your desktop).

Open Git Bash in the new folder.

Initialize a Git repository by running the command:

bash
Copy code
git init
Forking and Cloning the Repository
Fork the repository on GitHub.

Clone your forked repository of the project using:

bash
Copy code
git clone https://github.com/<your_username>/OnlineBookSales.git
Setting Upstream and Updating Your Fork
Navigate to the project directory:

bash
Copy code
cd OnlineBookSales
Add a reference (remote) to the original repository:

bash
Copy code
git remote add upstream https://github.com/Trisha-tech/OnlineBookSales.git
Check the remotes for this repository:

bash
Copy code
git remote -v
Update your fork with the latest changes from the upstream repository:

bash
Copy code
git pull upstream main
Making Changes
Create a new branch (prefer a branch name that relates to your assigned issue):

bash
Copy code
git checkout -b <YOUR_BRANCH_NAME>
Make your desired changes to the codebase.

Check your changes:

bash
Copy code
git status
git diff
Stage your changes:

bash
Copy code
git add <files_that_you_made_changes>
Commit your changes:

bash
Copy code
git commit -m "A relevant message"
Push the committed changes in your feature branch to your remote repository.

Alternatively, Contribute Using GitHub Desktop
Open GitHub Desktop: Launch GitHub Desktop and log in to your GitHub account if you haven't already.

Clone the Repository:

If you haven't cloned the OnlineBookSales repository yet, you can do so by clicking on the "File" menu and selecting "Clone Repository."
Choose the OnlineBookSales repository from the list of repositories on GitHub and clone it to your local machine.
Switch to the Correct Branch:

Ensure you are on the branch that you want to submit a pull request for.
If you need to switch branches, you can do so by clicking on the "Current Branch" dropdown menu and selecting the desired branch.
Make Changes: Make your changes to the code or files in the repository using your preferred code editor.

Commit Changes:

In GitHub Desktop, you'll see a list of the files you've changed. Check the box next to each file you want to include in the commit.
Enter a summary and description for your changes in the "Summary" and "Description" fields, respectively. Click the "Commit to <branch-name>" button to commit your changes to the local branch.
Push Changes to GitHub: After committing your changes, click the "Push origin" button in the top right corner of GitHub Desktop to push your changes to your forked repository on GitHub.

Create a Pull Request:

Go to the GitHub website and navigate to your fork of the OnlineBookSales repository.
You should see a button to "Compare & pull request" between your fork and the original repository. Click on it.
Review and Submit:

On the pull request page, review your changes and add any additional information, such as a title and description, that you want to include with your pull request.
Once you're satisfied, click the "Create pull request" button to submit your pull request.
Wait for Review: Your pull request will now be available for review by the project maintainers. They may provide feedback or ask for changes before merging your pull request into the main branch of the OnlineBookSales repository.

⭐️ Support the Project
If you find this project helpful, please consider giving it a star on GitHub! Your support helps to grow the project and reach more contributors.

Contributing to OnlineBookSales
First off, thanks for taking the time to contribute! 🎉

The following is a set of guidelines for contributing to OnlineBookSales. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

Reporting Issues
Before You Submit an Issue
Check the existing issues to see if your issue has already been reported. Duplicate issues clutter the issue tracker and make it harder for us to prioritize issues.

Search through open and closed issues to see if your issue has already been addressed.

Review the project documentation to ensure your issue hasn't already been covered.

How to Submit an Issue
Use a clear and descriptive title for the issue to identify the problem.

Describe the exact steps to reproduce the problem. Include code snippets or links to a repository, if applicable.

Explain the expected behavior and what actually happens.

Include any relevant logs or screenshots that can help us understand and reproduce the issue.

(Optional) Mention the version of the software you're using and the environment (e.g., operating system, browser) where the issue occurs.

Pull Requests
Before You Submit a Pull Request
Ensure that your changes align with the project's goals and codebase.

Write clear and concise commit messages and add the issue number where you were assigned the task (for clarity).

Test your changes thoroughly.

Update the documentation if your changes require it.

Ensure there are no merge conflicts with the base branch.

Only submit a pull request for issues that have been assigned to you or if the issue is not assigned to anyone else. Someone else might be working on an issue that has been assigned to them, so it’s important to avoid duplicating efforts.

Submitting a Pull Request
Create a new branch for your work.

Make your changes on this branch.

Commit your changes with a clear message.

Push your changes to your fork on GitHub.

Create a pull request from your fork's branch to the original repository's main branch.

Provide a detailed description of your changes in the pull request.