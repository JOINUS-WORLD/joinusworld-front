# Nextjs

## command `make build-dev`
.PHONY: build-dev
build-dev: ## Build the development docker image.
	docker compose -f docker-compose-dev.yml build

## command `make start-dev`
.PHONY: start-dev
start-dev: ## Start the development docker container.
	docker compose -f docker-compose-dev.yml up

## command `make start-dev`
.PHONY: start-dev
start-dev-bg: 
	docker compose -f docker-compose-dev.yml up -d

## command `make stop-dev`
.PHONY: stop-dev
stop-dev: ## Stop the development docker container.
	docker compose -f docker-compose-dev.yml down
