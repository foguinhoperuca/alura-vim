.PHONY: dev

prepare:
	npm install -g livereload

dev:
	livereload&
	python3 -m http.server

search-code:
	@clear
	@date
	@grep -rn "$(SRCH)" * --exclude-dir={tmp,venv,__pycache__,tests} --exclude=tags | awk '{print $1}'
	@date

build-ctags:
	#ctags -e -R --exclude=tags --exclude=TAGS --exclude=.git --exclude=__pycache__ --exclude=tests --exclude=venv --exclude=static --exclude=media --exclude=.mypy_cache --exclude=*~ .
	@ctags -R --options=.ctags .
