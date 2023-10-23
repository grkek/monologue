.DEFAULT_GOAL := help

.PHONY: help
help:
	@echo "Welcome to $(NAME)!"
	@echo "Use 'make <target>' where <target> is one of:"
	@echo ""
	@echo "  all	run clean -> build -> run"
	@echo "  build	compile the TypeScript and build the binary"
	@echo "  clean	clean the build"
	@echo "  watch  clean the build and watch for changes"
	@echo ""
	@echo "Go forth and make something great!"

all: clean build run clean
watch: clean buildApplication nodemon

.PHONY: nodemon
nodemon:
	nodemon -e "html,css,ts,tsx" --exec "tsc && CRYSTAL_WORKERS=8 ./application"

.PHONY: build
build:
	tsc
	CRYSTAL_WORKERS=8 crystal build application.cr -Dpreview_mt --error-trace

.PHONY: buildApplication
buildApplication:
	tsc
	CRYSTAL_WORKERS=8 crystal build application.cr -Dpreview_mt --error-trace

.PHONY: run
run:
	CRYSTAL_WORKERS=8 GTK_DEBUG=interactive ./application

.PHONY: clean
clean:
	rm -rf ./static/scripts
	rm -rf ./application
	rm -rf ./application.dwarf