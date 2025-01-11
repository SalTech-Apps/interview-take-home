import 'package:event_ticket/commons/navigation/routes.dart';
import 'package:event_ticket/modules/authentication/views/signup.view.dart';

import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

final routers = [
  GoRoute(
    name: Routes.init.name,
    path: Routes.init.path,
    builder: (BuildContext context, GoRouterState state) => const SignupView(),
  ),
];
