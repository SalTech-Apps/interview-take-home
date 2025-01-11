import 'package:event_ticket/commons/locator.dart';
import 'package:event_ticket/modules/authentication/repositories/auth.repository.dart';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:mobx/mobx.dart';

part 'signup.store.g.dart';

class SignupScreenBloc = SignupScreenBase with _$SignupScreenBloc;

abstract class SignupScreenBase with Store {
  TextEditingController fullNameController = TextEditingController();
  TextEditingController emailController = TextEditingController();
  TextEditingController passwordController = TextEditingController();
  TextEditingController confirmController = TextEditingController();

  final loginFormKey = GlobalKey<FormState>();

  final _router = locator<GoRouter>();

  @readonly
  String _requestState = 'idle';

  @action
  onSubmit() async {
    final fname = fullNameController.text.trim();
    final email = emailController.text.trim().toLowerCase();
    final password = passwordController.text.trim();
    final cPassword = confirmController.text.trim();

    await Authenticationrepository().signup(
      {
        "fullName": fname,
        'email': email,
        'password': password,
        'confirmPassword': cPassword,
      },
    );
  }
}
