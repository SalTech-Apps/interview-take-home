class Route {
  final String name;
  final String path;

  Route(this.name, this.path);
}

class Routes {
  static final Route init = Route(
    'init',
    '/',
  );

  static final Route welcome = Route(
    'welcome',
    '/welcome',
  );
}
