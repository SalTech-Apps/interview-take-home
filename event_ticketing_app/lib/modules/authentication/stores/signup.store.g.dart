// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'signup.store.dart';

// **************************************************************************
// StoreGenerator
// **************************************************************************

// ignore_for_file: non_constant_identifier_names, unnecessary_brace_in_string_interps, unnecessary_lambdas, prefer_expression_function_bodies, lines_longer_than_80_chars, avoid_as, avoid_annotating_with_dynamic, no_leading_underscores_for_local_identifiers

mixin _$SignupScreenBloc on SignupScreenBase, Store {
  late final _$_requestStateAtom =
      Atom(name: 'SignupScreenBase._requestState', context: context);

  String get requestState {
    _$_requestStateAtom.reportRead();
    return super._requestState;
  }

  @override
  String get _requestState => requestState;

  @override
  set _requestState(String value) {
    _$_requestStateAtom.reportWrite(value, super._requestState, () {
      super._requestState = value;
    });
  }

  @override
  String toString() {
    return '''

    ''';
  }
}
