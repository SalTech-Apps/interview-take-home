import 'package:dio/dio.dart';

class Authenticationrepository {
  final dio = Dio();

  signup(Map<String, String> data) async {
    final response = await dio.post(
      'https://3a1c-197-210-79-39.ngrok-free.app/n/v1/signup',
      data: data,
    );

    print(response.data.toString());

    print(response.data.toString());
  }
}
