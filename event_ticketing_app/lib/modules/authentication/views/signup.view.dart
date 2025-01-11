import 'dart:ui';

import 'package:event_ticket/modules/authentication/stores/signup.store.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_mobx/flutter_mobx.dart';
import 'package:mobx/mobx.dart';

class SignupView extends StatefulWidget {
  const SignupView({super.key});

  @override
  State<SignupView> createState() => _SignupViewState();
}

class _SignupViewState extends State<SignupView> {
  final _bloc = SignupScreenBloc();

  @override
  Widget build(BuildContext context) {
    return ReactionBuilder(
      builder: (context) {
        return reaction((fn) {
          return true;
        }, (effect) {
          // -- TODO
        });
      },
      child: Observer(
        builder: (context) {
          return Scaffold(
            body: SafeArea(
              child: Container(
                padding: const EdgeInsets.all(12),
                child: SingleChildScrollView(
                  child: Column(
                    children: [
                      const Text(
                        'Hello!',
                        style: TextStyle(
                          fontSize: 22,
                          fontWeight: FontWeight.w700,
                        ),
                      ),
                      const Text(
                        'Sign in to PartyWithMe!',
                        style: TextStyle(
                          fontSize: 22,
                          fontWeight: FontWeight.w700,
                        ),
                      ),
                      const SizedBox(
                        height: 10,
                      ),
                      const Text(
                        'Welcome to PartyWithMe! Signup to get started right away',
                        textAlign: TextAlign.center,
                        style: TextStyle(
                          fontSize: 16,
                          fontWeight: FontWeight.normal,
                        ),
                      ),
                      const SizedBox(
                        height: 20,
                      ),
                      TextFormField(
                        controller: _bloc.fullNameController,
                        keyboardType: TextInputType.text,
                        decoration: const InputDecoration(
                          hintText: 'full name',
                          prefixIcon: Icon(
                            Icons.person_2_outlined,
                          ),
                          border: OutlineInputBorder(),
                        ),
                      ),
                      const SizedBox(
                        height: 20,
                      ),
                      TextFormField(
                        controller: _bloc.emailController,
                        keyboardType: TextInputType.emailAddress,
                        decoration: const InputDecoration(
                          hintText: 'abc@email.com',
                          prefixIcon: Icon(
                            Icons.email,
                          ),
                          border: OutlineInputBorder(),
                        ),
                      ),
                      const SizedBox(
                        height: 20,
                      ),
                      TextFormField(
                        controller: _bloc.passwordController,
                        keyboardType: TextInputType.text,
                        obscureText: true,
                        decoration: const InputDecoration(
                          hintText: 'password',
                          prefixIcon: Icon(
                            Icons.lock_outline,
                          ),
                          suffixIcon: Icon(
                            Icons.lock_outline,
                          ),
                          border: OutlineInputBorder(),
                        ),
                      ),
                      const SizedBox(
                        height: 20,
                      ),
                      TextFormField(
                        controller: _bloc.confirmController,
                        keyboardType: TextInputType.text,
                        obscureText: true,
                        decoration: const InputDecoration(
                          hintText: 'confirm password',
                          prefixIcon: Icon(
                            Icons.lock_outline,
                          ),
                          suffixIcon: Icon(
                            Icons.remove_red_eye_sharp,
                          ),
                          border: OutlineInputBorder(),
                        ),
                      ),
                      const SizedBox(
                        height: 30,
                      ),
                      ElevatedButton(
                        onPressed: _bloc.onSubmit,
                        style: const ButtonStyle(
                          backgroundColor: WidgetStatePropertyAll<Color>(
                            Color(0xff191D4E),
                          ),
                          foregroundColor: WidgetStatePropertyAll<Color>(
                            Colors.white,
                          ),
                        ),
                        child: const Row(
                          crossAxisAlignment: CrossAxisAlignment.center,
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            Text('Sign up'),
                            Icon(Icons.arrow_forward_outlined)
                          ],
                        ),
                      )
                    ],
                  ),
                ),
              ),
            ),
          );
        },
      ),
    );
  }
}
