SHELL := /usr/bin/env bash

SRC := site-source
DEST := docs
CONFIG := $(SRC)/_config.yml
JEKYLL := BUNDLE_GEMFILE=$(SRC)/Gemfile bundle exec jekyll

.PHONY: dev prod bundle clean exam

exam:
	@if [ -z "$(EXAM)" ]; then \
	  echo "Usage: make exam EXAM=_quizzes/quiz-file.md"; \
	  exit 1; \
	fi
	ruby scripts/generate-exam.rb $(EXAM)

bundle:
	BUNDLE_GEMFILE=$(SRC)/Gemfile bundle install

dev: bundle
	$(JEKYLL) serve \
	  --source $(SRC) \
	  --destination $(DEST) \
	  --config $(CONFIG) \
	  --drafts \
	  --livereload \
	  --livereload-port 35730 \
	  --port 4002 \
	  --trace

prod: bundle
	JEKYLL_ENV=production $(JEKYLL) build \
	  --source $(SRC) \
	  --destination $(DEST) \
	  --config $(CONFIG) \
	  --trace
	touch $(DEST)/.nojekyll
	git add $(DEST)
	git commit

clean:
	rm -rf $(DEST)
