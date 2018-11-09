serve:
	docker-compose up

shell:
	docker-compose run --rm web /bin/ash

test:
	docker-compose run --rm web npm run test

storybook:
	docker-compose run -p 9009:9009 --rm web npm run storybook

build:
	docker-compose build
