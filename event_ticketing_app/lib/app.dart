import 'package:event_ticket/commons/locator.dart';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class EventTicketApp extends StatelessWidget {
  EventTicketApp({super.key});

  final _router = locator.get<GoRouter>();

// This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      title: 'Event Ticket',

      debugShowCheckedModeBanner: false,
      routerConfig: _router,

      /// See (https://medium.com/flutter-community/create-a-theme-and-primary-color-switcher-for-your-flutter-app-using-provider-fd334dd7d761)
      /// See (https://github.com/Roaa94/flutter-theme-switcher)
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(
          seedColor: const Color(0xff191D4E),
        ),
        useMaterial3: true,
      ),
    );
  }
}
