import 'package:event_ticket/commons/locator.dart';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:mobx/mobx.dart';

part 'login.store.g.dart';

class LoginScreenBloc = LoginScreenBase with _$LoginScreenBloc;

abstract class LoginScreenBase with Store {
  TextEditingController emailController = TextEditingController();

  final loginFormKey = GlobalKey<FormState>();

  final _router = locator<GoRouter>();
}
