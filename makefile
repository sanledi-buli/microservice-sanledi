IMAGE_NAME := sanledi/microservice-sanledi

build:
	docker build -t=$(IMAGE_NAME) .

run:
	docker run --env-file .env -it -p 3000:3000 $(IMAGE_NAME)

.PHONY: build run
