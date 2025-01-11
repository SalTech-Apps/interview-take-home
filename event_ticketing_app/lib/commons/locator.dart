import 'package:event_ticket/commons/navigation/main.dart';
import 'package:get_it/get_it.dart';
import 'package:go_router/go_router.dart';

final locator = GetIt.instance;

void setup() {
  locator.registerSingleton<GoRouter>(router());
}
