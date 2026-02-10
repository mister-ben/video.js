/*
 * This just enforces that pull request titles use conventional commit syntax.
 * https://www.conventionalcommits.org/en/v1.0.0/#specification
 *
 * GitHub uses the PR title as the commit message for squashed-merged commits
 * by default, and only commits using this syntax get added to the changelog.
 */

import * as core from '@actions/core';
import * as github from '@actions/github';

(async function run() {
  const title = github.context.payload.pull_request?.title;
  const titleRegex = /^(build|chore|ci|docs|feat|fix|perf|refactor|revert|style|test)(\(.+\))?!?: (.+)/;

  if (!!title.match(titleRegex)) {
    core.info('Pull request title is OK');
  } else {
    core.setFailed('Please use conventional commit style for the PR title so the merged change appears in the changelog. See https://www.conventionalcommits.org/.');
  }
})();

