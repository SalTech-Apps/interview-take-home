.DEFAULT_GOAL := default

default:
	@echo "Attach a target"

install:
	.fvm/flutter_sdk/bin/flutter pub get

clean:
	@echo "Deleting all flutter cache"
	.fvm/flutter_sdk/bin/flutter clean
	.fvm/flutter_sdk/bin/flutter clean cache

clean-ios:
	@echo "Deleting flutter cache and ios cache"
	.fvm/flutter_sdk/bin/flutter clean
	.fvm/flutter_sdk/bin/flutter clean cache
	rm -rf ./ios/Pods ./ios/Podfile.lock

clean-build:
	@echo "Delete ./build"
	rm -rf ./build

build: build-runner build-android build-ios

build-android:
	.fvm/flutter_sdk/bin/flutter build appbundle --flavor production -t ./lib/main_prd.dart --release --obfuscate --split-debug-info=./
build-ios:
	.fvm/flutter_sdk/bin/flutter build ipa --flavor production -t ./lib/main_prd.dart --release --obfuscate --split-debug-info=./ --export-method=app-store

build-dev-android:
	.fvm/flutter_sdk/bin/flutter build apk --flavor development -t ./lib/main_dev.dart --release --obfuscate --split-debug-info=./

build-stg-android:
	.fvm/flutter_sdk/bin/flutter build apk --flavor staging -t ./lib/main_stg.dart --release --obfuscate --split-debug-info=./

build-runner:
	.fvm/flutter_sdk/bin/dart run build_runner build --delete-conflicting-outputs

generate-launcher-icons:
	.fvm/flutter_sdk/bin/flutter pub run flutter_launcher_icons -f flutter_launcher_icons.yaml

generate-splash-screens:
	.fvm/flutter_sdk/bin/flutter pub run flutter_native_splash:create --flavors development,staging,production