import 'package:event_ticket/commons/navigation/routers.dart';
import 'package:event_ticket/commons/navigation/routes.dart';
import 'package:go_router/go_router.dart';

GoRouter router() {
  return GoRouter(
    debugLogDiagnostics: true,
    initialLocation: Routes.init.path,
    observers: [],
    routes: <GoRoute>[
      ...routers,
    ],
  );
}
