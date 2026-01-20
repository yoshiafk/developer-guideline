import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '@/components/PageHero';
import Layout from '@/components/Layout';
import OnThisPage from '@/components/OnThisPage';
import CodeSnippet from '@/components/CodeSnippet';
import FileTree, { FileTreeItem } from '@/components/FileTree';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import CallToAction from '@/components/CallToAction';
import {
  Smartphone,
  Zap,
  Layers,
  ShieldCheck,
  CheckCircle2,
  Database,
  PenTool,
  FlaskConical,
  ArrowRight,
  BookOpen,
  CircleAlert as AlertCircle,
  Settings,
  Navigation,
  Palette,
  Lock,
  Activity,
  FolderTree
} from 'lucide-react';

const chapters = [
  { id: "overview", title: "1. Project Overview", icon: BookOpen },
  { id: "project-structure", title: "2. Project Structure", icon: FolderTree },
  { id: "state-management", title: "3. State Management", icon: Zap },
  { id: "ui-ux", title: "4. UI/UX Standards", icon: Palette },
  { id: "navigation", title: "5. Navigation", icon: Navigation },
  { id: "api-integration", title: "6. API Integration", icon: Database },
  { id: "local-storage", title: "7. Local Storage", icon: Lock },
  { id: "testing", title: "8. Testing", icon: FlaskConical },
  { id: "performance", title: "9. Performance", icon: Activity },
  { id: "naming", title: "10. Code Style", icon: PenTool },
];

const folderStructureData: FileTreeItem[] = [
  {
    name: "lib",
    type: "folder",
    children: [
      { name: "main.dart", type: "file", comment: "App entry point" },
      { name: "app.dart", type: "file", comment: "MaterialApp configuration" },
      {
        name: "core",
        type: "folder",
        children: [
          { name: "constants", type: "folder", comment: "App-wide constants" },
          { name: "error", type: "folder", comment: "Failure classes, exceptions" },
          { name: "network", type: "folder", comment: "Dio client, interceptors" },
          { name: "theme", type: "folder", comment: "Theme data, colors, typography" },
          { name: "utils", type: "folder", comment: "Helpers, extensions" }
        ]
      },
      {
        name: "features",
        type: "folder",
        children: [
          {
            name: "auth",
            type: "folder",
            children: [
              {
                name: "data",
                type: "folder",
                children: [
                  { name: "datasources", type: "folder", comment: "Remote & local data sources" },
                  { name: "models", type: "folder", comment: "Data models (JSON serialization)" },
                  { name: "repositories", type: "folder", comment: "Repository implementations" }
                ]
              },
              {
                name: "domain",
                type: "folder",
                children: [
                  { name: "entities", type: "folder", comment: "Business entities" },
                  { name: "repositories", type: "folder", comment: "Repository interfaces" },
                  { name: "usecases", type: "folder", comment: "Business logic use cases" }
                ]
              },
              {
                name: "presentation",
                type: "folder",
                children: [
                  { name: "bloc", type: "folder", comment: "BLoC / Riverpod providers" },
                  { name: "pages", type: "folder", comment: "Screen widgets" },
                  { name: "widgets", type: "folder", comment: "Feature-specific widgets" }
                ]
              }
            ]
          }
        ]
      },
      {
        name: "shared",
        type: "folder",
        children: [
          { name: "widgets", type: "folder", comment: "Reusable widgets across features" }
        ]
      },
      {
        name: "router",
        type: "folder",
        children: [
          { name: "app_router.dart", type: "file", comment: "GoRouter configuration" }
        ]
      }
    ]
  }
];

const FlutterDeveloperGuidelinePage: React.FC = () => {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Frontend & Mobile' },
    { label: 'Flutter' }
  ];

  return (
    <Layout>
      <PageHero
        title="Flutter Mobile Guideline"
        subtitle="Standardized practices for building cross-platform mobile applications with Flutter and Dart at AII."
        breadcrumbs={breadcrumbs}
      />

      <div className="py-12 flex flex-col lg:flex-row gap-12">
        <main className="flex-1 min-w-0 space-y-32 pb-24">

          {/* Chapter 1: Project Overview */}
          <section id="overview" className="scroll-mt-28 space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 1</Badge>
              <h2 className="text-4xl font-extrabold tracking-tight">Project Overview</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Flutter allows us to maintain a <strong>single codebase</strong> for both iOS and Android while ensuring high-quality, native performance and premium UI/UX experiences.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { text: "Flutter 3.x", icon: Smartphone },
                { text: "Dart 3.x", icon: Zap },
                { text: "Riverpod / BLoC", icon: Layers },
                { text: "Dio HTTP Client", icon: Database },
                { text: "GoRouter Navigation", icon: Navigation },
                { text: "Hive / SharedPrefs", icon: Lock },
              ].map((tech, i) => (
                <div key={i} className="glass flex items-center gap-3 p-4 rounded-xl border border-border/50">
                  <tech.icon className="h-5 w-5 text-primary" />
                  <span className="font-semibold text-sm">{tech.text}</span>
                </div>
              ))}
            </div>

            {/* New Developer Checklist */}
            <div className="mt-12 p-8 rounded-3xl bg-blue-500/5 border border-blue-500/10 space-y-6">
              <div className="flex items-center gap-3 text-blue-500">
                <div className="p-2 rounded-lg bg-blue-500/10">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">New Developer Checklist</h3>
              </div>
              <p className="text-muted-foreground">Follow these steps to get your first Flutter project running at AII:</p>
              <div className="grid gap-4">
                {[
                  { step: "Install Flutter SDK", desc: "Download Flutter SDK 3.x and add to PATH. Verify with: flutter doctor" },
                  { step: "Setup IDE", desc: "Install VS Code with Flutter/Dart extensions or Android Studio with Flutter plugin." },
                  { step: "Setup Emulators", desc: "Configure Android emulator and/or iOS Simulator (macOS required for iOS)." },
                  { step: "Clone Repository", desc: "Clone the project repository and navigate to the project folder." },
                  { step: "Get Dependencies", desc: "Run 'flutter pub get' to install all package dependencies." },
                  { step: "Run Application", desc: "Execute 'flutter run' to launch the app on your connected device/emulator." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl border border-border/50 bg-background/50">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center font-bold text-sm">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{item.step}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <Separator />

          {/* Chapter 2: Project Structure */}
          <section id="project-structure" className="scroll-mt-28 space-y-12">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 2</Badge>
              <h2 className="text-4xl font-extrabold tracking-tight">Project Structure</h2>
              <p className="text-lg text-muted-foreground">Feature-based folder organization following Clean Architecture principles.</p>
            </div>

            <FileTree
              title="Clean Architecture Layout"
              data={folderStructureData}
            />

            <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10 space-y-4">
              <h4 className="font-bold flex items-center gap-2 text-primary"><Layers className="h-5 w-5" /> Clean Architecture Layers</h4>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div className="space-y-2">
                  <p><strong>Presentation</strong></p>
                  <p className="text-muted-foreground">UI (Pages, Widgets), State Management (BLoC/Riverpod)</p>
                </div>
                <div className="space-y-2">
                  <p><strong>Domain</strong></p>
                  <p className="text-muted-foreground">Entities, Use Cases, Repository Interfaces</p>
                </div>
                <div className="space-y-2">
                  <p><strong>Data</strong></p>
                  <p className="text-muted-foreground">Models, Data Sources, Repository Implementations</p>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* Chapter 3: State Management */}
          <section id="state-management" className="scroll-mt-28 space-y-12">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 3</Badge>
              <h2 className="text-4xl font-extrabold tracking-tight">State Management</h2>
              <p className="text-lg text-muted-foreground">We primarily use Riverpod or BLoC depending on team preference and project complexity.</p>
            </div>

            <div className="space-y-8">
              <div className="p-6 rounded-2xl bg-muted/30 border space-y-4">
                <h4 className="font-bold">When to Use Which?</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-muted text-xs font-bold uppercase text-muted-foreground">
                      <tr>
                        <th className="px-4 py-3 text-left">Solution</th>
                        <th className="px-4 py-3 text-left">Best For</th>
                        <th className="px-4 py-3 text-left">Complexity</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr><td className="px-4 py-2 font-medium">Riverpod</td><td className="px-4 py-2">Most projects, compile-time safety</td><td className="px-4 py-2"><Badge variant="secondary">Medium</Badge></td></tr>
                      <tr><td className="px-4 py-2 font-medium">BLoC</td><td className="px-4 py-2">Complex apps, strict separation</td><td className="px-4 py-2"><Badge variant="secondary">High</Badge></td></tr>
                      <tr><td className="px-4 py-2 font-medium">Provider</td><td className="px-4 py-2">Simple apps, quick prototypes</td><td className="px-4 py-2"><Badge variant="outline">Low</Badge></td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8">
                <CodeSnippet
                  title="Riverpod Provider Example"
                  language="dart"
                  code={`// providers/auth_provider.dart
import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'auth_provider.g.dart';

@riverpod
class Auth extends _$Auth {
  @override
  AuthState build() => const AuthState.initial();

  Future<void> login(String email, String password) async {
  state = const AuthState.loading();
  try {
      final user = await ref.read(authRepositoryProvider).login(
    email: email,
    password: password,
  );
    state = AuthState.authenticated(user);
  } catch (e) {
    state = AuthState.error(e.toString());
  }
}

void logout() {
  ref.read(authRepositoryProvider).logout();
  state = const AuthState.initial();
}
}

// Usage in Widget
class LoginPage extends ConsumerWidget {
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final authState = ref.watch(authProvider);

    return authState.when(
      initial: () => LoginForm(),
      loading: () => CircularProgressIndicator(),
      authenticated: (user) => HomePage(user: user),
      error: (message) => ErrorWidget(message),
    );
  }
} `}
                />
                <CodeSnippet
                  title="BLoC Pattern Example"
                  language="dart"
                  code={`// bloc/auth_bloc.dart
import 'package:flutter_bloc/flutter_bloc.dart';

class AuthBloc extends Bloc<AuthEvent, AuthState> {
  final AuthRepository _authRepository;

  AuthBloc(this._authRepository): super(AuthInitial()) {
  on<LoginRequested>(_onLoginRequested);
  on<LogoutRequested>(_onLogoutRequested);
}

Future < void> _onLoginRequested(
  LoginRequested event,
  Emitter < AuthState > emit,
) async {
  emit(AuthLoading());
  try {
      final user = await _authRepository.login(
    email: event.email,
    password: event.password,
  );
    emit(AuthAuthenticated(user));
  } catch (e) {
    emit(AuthError(e.toString()));
  }
}

void _onLogoutRequested(
  LogoutRequested event,
  Emitter < AuthState > emit,
) {
  _authRepository.logout();
  emit(AuthInitial());
}
}

// Usage in Widget
BlocBuilder<AuthBloc, AuthState>(
  builder: (context, state) {
    if (state is AuthLoading) return CircularProgressIndicator();
if (state is AuthAuthenticated) return HomePage(user: state.user);
return LoginForm();
  },
)`}
                />
              </div>
            </div>
          </section>

          <Separator />

          {/* Chapter 4: UI/UX Standards */}
          <section id="ui-ux" className="scroll-mt-28 space-y-12">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 4</Badge>
              <h2 className="text-4xl font-extrabold tracking-tight">UI/UX Standards</h2>
            </div>

            <div className="space-y-8">
              <CodeSnippet
                title="Theme Configuration"
                language="dart"
                code={`// core/theme/app_theme.dart
import 'package:flutter/material.dart';

class AppTheme {
  static ThemeData get lightTheme => ThemeData(
    useMaterial3: true,
    colorScheme: ColorScheme.fromSeed(
      seedColor: const Color(0xFF0066CC),
        brightness: Brightness.light,
    ),
textTheme: const TextTheme(
  headlineLarge: TextStyle(fontSize: 32, fontWeight: FontWeight.bold),
    bodyLarge: TextStyle(fontSize: 16),
    ),
elevatedButtonTheme: ElevatedButtonThemeData(
  style: ElevatedButton.styleFrom(
    padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 12),
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
      ),
    ),
inputDecorationTheme: const InputDecorationTheme(
  border: OutlineInputBorder(),
    contentPadding: EdgeInsets.symmetric(horizontal: 16, vertical: 12),
    ),
  );

  static ThemeData get darkTheme => ThemeData(
      useMaterial3: true,
      colorScheme: ColorScheme.fromSeed(
        seedColor: const Color(0xFF0066CC),
          brightness: Brightness.dark,
    ),
  );
}`}
              />

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                  <p className="text-xs font-bold uppercase text-emerald-600 mb-2">✅ Widget Best Practices</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Use const constructors wherever possible</li>
                    <li>• Extract widgets into separate files</li>
                    <li>• Use MediaQuery for responsive layouts</li>
                    <li>• Prefer SizedBox over Container for spacing</li>
                    <li>• Use CustomScrollView for complex scrolling</li>
                  </ul>
                </div>
                <div className="p-5 rounded-xl bg-destructive/5 border border-destructive/20">
                  <p className="text-xs font-bold uppercase text-destructive mb-2">❌ Avoid</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Deep widget nesting (3+ levels)</li>
                    <li>• Hardcoded colors/dimensions</li>
                    <li>• setState in deeply nested widgets</li>
                    <li>• Heavy computation in build()</li>
                    <li>• Ignoring platform differences</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* Chapter 5: Navigation */}
          <section id="navigation" className="scroll-mt-28 space-y-12">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 5</Badge>
              <h2 className="text-4xl font-extrabold tracking-tight">Navigation</h2>
              <p className="text-lg text-muted-foreground">Use GoRouter for declarative routing with deep linking support.</p>
            </div>

            <CodeSnippet
              title="GoRouter Configuration"
              language="dart"
              code={`// router/app_router.dart
import 'package:go_router/go_router.dart';

final appRouter = GoRouter(
  initialLocation: '/',
  debugLogDiagnostics: true,
  redirect: (context, state) {
    final isLoggedIn = authProvider.isAuthenticated;
    final isLoggingIn = state.matchedLocation == '/login';

    if (!isLoggedIn && !isLoggingIn) return '/login';
    if (isLoggedIn && isLoggingIn) return '/';
    return null;
  },
  routes: [
  GoRoute(
    path: '/',
    name: 'home',
    builder: (context, state) => const HomePage(),
      routes: [
        GoRoute(
          path: 'profile',
          name: 'profile',
          builder: (context, state) => const ProfilePage(),
        ),
        GoRoute(
          path: 'settings',
          name: 'settings',
          builder: (context, state) => const SettingsPage(),
        ),
      ],
    ),
  GoRoute(
    path: '/login',
    name: 'login',
    builder: (context, state) => const LoginPage(),
    ),
  GoRoute(
    path: '/product/:id',
    name: 'product-detail',
    builder: (context, state) {
        final productId = state.pathParameters['id']!;
      return ProductDetailPage(productId: productId);
    },
  ),
],
  errorBuilder: (context, state) => ErrorPage(error: state.error),
);

// Navigation usage
context.go('/profile');  // Replace current route
context.push('/product/123');  // Push new route
context.goNamed('product-detail', pathParameters: { 'id': '456' }); `}
            />
          </section>

          <Separator />

          {/* Chapter 6: API Integration */}
          <section id="api-integration" className="scroll-mt-28 space-y-12">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 6</Badge>
              <h2 className="text-4xl font-extrabold tracking-tight">API Integration</h2>
              <p className="text-lg text-muted-foreground">Dio HTTP client with interceptors for authentication and error handling.</p>
            </div>

            <CodeSnippet
              title="Dio Client Configuration"
              language="dart"
              code={`// core/network/dio_client.dart
import 'package:dio/dio.dart';

class DioClient {
  late final Dio _dio;
  final TokenStorage _tokenStorage;

  DioClient(this._tokenStorage) {
    _dio = Dio(BaseOptions(
      baseUrl: 'https://api.example.com/v1',
      connectTimeout: const Duration(seconds: 30),
        receiveTimeout: const Duration(seconds: 30),
          headers: { 'Content-Type': 'application/json' },
    ));

    _dio.interceptors.addAll([
      _AuthInterceptor(_tokenStorage),
      _LoggingInterceptor(),
    ]);
  }

  Future<Response<T>> get<T>(String path, {Map<String, dynamic> ? queryParameters}) {
    return _dio.get<T>(path, queryParameters: queryParameters);
  }

      Future<Response<T>> post<T>(String path, {dynamic data}) {
    return _dio.post<T>(path, data: data);
  }
}

          class _AuthInterceptor extends Interceptor {
            final TokenStorage _tokenStorage;

          _AuthInterceptor(this._tokenStorage);

          @override
          void onRequest(RequestOptions options, RequestInterceptorHandler handler) async {
            final token = await _tokenStorage.getAccessToken();
          if (token != null) {
            options.headers['Authorization'] = 'Bearer $token';
    }
          handler.next(options);
  }

          @override
          void onError(DioException err, ErrorInterceptorHandler handler) async {
    if (err.response?.statusCode == 401) {
      // Handle token refresh
      try {
            await _tokenStorage.refreshToken();
          // Retry original request
          handler.resolve(await _dio.fetch(err.requestOptions));
      } catch (e) {
            handler.next(err);
      }
    } else {
            handler.next(err);
    }
  }
}`}
            />
          </section>

          <Separator />

          {/* Chapter 7: Local Storage */}
          <section id="local-storage" className="scroll-mt-28 space-y-12">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 7</Badge>
              <h2 className="text-4xl font-extrabold tracking-tight">Local Storage</h2>
            </div>

            <div className="grid grid-cols-1 gap-8">
              <Card className="glass shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg">SharedPreferences</CardTitle>
                  <CardDescription>Simple key-value storage</CardDescription>
                </CardHeader>
                <CardContent>
                  <CodeSnippet
                    language="dart"
                    code={`// For simple settings and flags
final prefs = await SharedPreferences.getInstance();
await prefs.setString('theme', 'dark');
await prefs.setBool('onboarding_complete', true);

final theme = prefs.getString('theme') ?? 'light';`}
                  />
                </CardContent>
              </Card>

              <Card className="glass shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg">Hive / Isar</CardTitle>
                  <CardDescription>Structured data & offline cache</CardDescription>
                </CardHeader>
                <CardContent>
                  <CodeSnippet
                    language="dart"
                    code={`// For complex objects and offline data
@HiveType(typeId: 0)
class User extends HiveObject {
  @HiveField(0)
  late String id;
  @HiveField(1)
  late String name;
}

final box = Hive.box<User>('users');
await box.put('current', user);`}
                  />
                </CardContent>
              </Card>
            </div>

            <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10 flex gap-4">
              <Lock className="h-6 w-6 text-primary shrink-0" />
              <div className="space-y-2">
                <h4 className="font-bold text-primary">Secure Storage</h4>
                <p className="text-sm text-muted-foreground">For sensitive data like tokens and credentials, always use <code>flutter_secure_storage</code> which encrypts data using platform-specific secure storage (Keychain on iOS, EncryptedSharedPreferences on Android).</p>
              </div>
            </div>
          </section>

          <Separator />

          {/* Chapter 8: Testing */}
          <section id="testing" className="scroll-mt-28 space-y-12">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 8</Badge>
              <h2 className="text-4xl font-extrabold tracking-tight">Testing</h2>
            </div>

            <div className="grid grid-cols-1 gap-8">
              <CodeSnippet
                title="Widget Testing"
                language="dart"
                code={`// test/widgets/login_button_test.dart
import 'package:flutter_test/flutter_test.dart';

void main() {
  group('LoginButton', () {
    testWidgets('renders correctly', (tester) async {
      await tester.pumpWidget(
        const MaterialApp(home: LoginButton()),
      );
      
      expect(find.text('Login'), findsOneWidget);
      expect(find.byType(ElevatedButton), findsOneWidget);
    });

    testWidgets('calls onPressed when tapped', (tester) async {
      var pressed = false;
      await tester.pumpWidget(
        MaterialApp(
          home: LoginButton(onPressed: () => pressed = true),
        ),
      );
      
      await tester.tap(find.byType(ElevatedButton));
      await tester.pump();
      
      expect(pressed, isTrue);
    });
  });
}`}
              />
              <CodeSnippet
                title="Unit Testing with Mocktail"
                language="dart"
                code={`// test/services/auth_service_test.dart
import 'package:flutter_test/flutter_test.dart';
import 'package:mocktail/mocktail.dart';

class MockAuthRepository extends Mock implements AuthRepository {}

void main() {
  late AuthService authService;
  late MockAuthRepository mockRepository;

  setUp(() {
    mockRepository = MockAuthRepository();
    authService = AuthService(mockRepository);
  });

  group('login', () {
    test('returns user when credentials are valid', () async {
      // Arrange
      when(() => mockRepository.login(
        email: any(named: 'email'),
        password: any(named: 'password'),
      )).thenAnswer((_) async => User(id: '1', name: 'Test'));

      // Act
      final result = await authService.login('test@email.com', 'pass');

      // Assert
      expect(result.name, equals('Test'));
      verify(() => mockRepository.login(
        email: 'test@email.com',
        password: 'pass',
      )).called(1);
    });
  });
}`}
              />
            </div>
          </section>

          <Separator />

          {/* Chapter 9: Performance */}
          <section id="performance" className="scroll-mt-28 space-y-12">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 9</Badge>
              <h2 className="text-4xl font-extrabold tracking-tight">Performance</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                <p className="text-xs font-bold uppercase text-emerald-600 mb-2">✅ Optimization Tips</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Use const constructors liberally</li>
                  <li>• Implement ListView.builder for long lists</li>
                  <li>• Cache network images (cached_network_image)</li>
                  <li>• Use RepaintBoundary for complex widgets</li>
                  <li>• Avoid rebuilds with Selector/Consumer</li>
                  <li>• Profile with Flutter DevTools</li>
                </ul>
              </div>
              <div className="p-5 rounded-xl bg-destructive/5 border border-destructive/20">
                <p className="text-xs font-bold uppercase text-destructive mb-2">❌ Performance Killers</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Building all children at once (ListView)</li>
                  <li>• Unoptimized images (size, format)</li>
                  <li>• Blocking the main isolate</li>
                  <li>• Excessive setState calls</li>
                  <li>• Memory leaks from streams</li>
                </ul>
              </div>
            </div>

            <CodeSnippet
              title="Efficient List Building"
              language="dart"
              code={`// ❌ WRONG: All items built at once
ListView(
  children: items.map((item) => ItemWidget(item: item)).toList(),
)

// ✅ CORRECT: Items built lazily on demand
ListView.builder(
  itemCount: items.length,
  itemBuilder: (context, index) {
    final item = items[index];
    return ItemWidget(key: ValueKey(item.id), item: item);
  },
)`}
            />
          </section>

          <Separator />

          {/* Chapter 10: Code Style */}
          <section id="naming" className="scroll-mt-28 space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 10</Badge>
              <h2 className="text-4xl font-extrabold tracking-tight">Code Style & Naming</h2>
            </div>

            <div className="overflow-x-auto rounded-3xl border glass">
              <table className="w-full text-sm">
                <thead className="bg-muted text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  <tr>
                    <th className="px-6 py-4 text-left">Element</th>
                    <th className="px-6 py-4 text-left">Convention</th>
                    <th className="px-6 py-4 text-left">Example</th>
                  </tr>
                </thead>
                <tbody className="divide-y border-t">
                  {[
                    { el: "Files", conv: "snake_case", ex: "user_service.dart" },
                    { el: "Classes", conv: "PascalCase", ex: "UserService" },
                    { el: "Functions", conv: "camelCase", ex: "getUserById" },
                    { el: "Variables", conv: "camelCase", ex: "userName" },
                    { el: "Constants", conv: "camelCase", ex: "defaultTimeout" },
                    { el: "Private", conv: "_leadingUnderscore", ex: "_internalMethod" },
                    { el: "Widgets", conv: "PascalCase", ex: "UserProfileCard" },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-accent/5 transition-colors">
                      <td className="px-6 py-4 font-semibold">{row.el}</td>
                      <td className="px-6 py-4"><Badge variant="outline" className="bg-primary/5">{row.conv}</Badge></td>
                      <td className="px-6 py-4 font-mono text-xs text-primary">{row.ex}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-6 rounded-2xl bg-muted/30 border space-y-4">
              <h4 className="font-bold">Common Flutter Commands</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { cmd: "flutter run", desc: "Run app on device" },
                  { cmd: "flutter test", desc: "Run all tests" },
                  { cmd: "flutter analyze", desc: "Analyze code" },
                  { cmd: "flutter pub get", desc: "Get dependencies" },
                  { cmd: "flutter build apk", desc: "Build Android APK" },
                  { cmd: "flutter build ios", desc: "Build iOS app" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 p-3 rounded-lg bg-background border">
                    <code className="text-xs font-mono text-primary whitespace-nowrap">{item.cmd}</code>
                    <span className="text-xs text-muted-foreground">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <CallToAction
            description="Following these Flutter standards ensures your mobile applications are performant, maintainable, and deliver a premium user experience."
            primaryAction={{ label: "GitHub Workflow", href: "/github-axa-usage" }}
            secondaryAction={{ label: "Global Standards", href: "/coding-standard" }}
          />

        </main>

        <OnThisPage chapters={chapters} />
      </div>
    </Layout>
  );
};

export default FlutterDeveloperGuidelinePage;
