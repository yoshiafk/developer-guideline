import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '@/components/PageHero';
import Layout from '@/components/Layout';
import FileTree, { FileTreeItem } from '@/components/FileTree';
import OnThisPage from '@/components/OnThisPage';
import CodeSnippet from '@/components/CodeSnippet';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import CallToAction from '@/components/CallToAction';
import {
    Coffee,
    Server,
    ShieldCheck,
    Zap,
    CheckCircle2,
    Database,
    Layers,
    PenTool,
    FlaskConical,
    Activity,
    ArrowRight,
    BookOpen,
    CircleAlert as AlertCircle,
    FileCode,
    Settings,
    Lock,
    Bug,
    Terminal
} from 'lucide-react';

const chapters = [
    { id: "overview", title: "1. Project Overview", icon: BookOpen },
    { id: "project-structure", title: "2. Project Structure", icon: Layers },
    { id: "spring-boot", title: "3. Spring Boot Standards", icon: Zap },
    { id: "rest-api", title: "4. REST API Design", icon: Server },
    { id: "persistence", title: "5. Persistence & Database", icon: Database },
    { id: "validation", title: "6. Validation & Errors", icon: ShieldCheck },
    { id: "testing", title: "7. Testing Guidelines", icon: FlaskConical },
    { id: "logging", title: "8. Logging & Monitoring", icon: Activity },
    { id: "maven", title: "9. Maven Build", icon: Settings },
    { id: "naming", title: "10. Code Style & Naming", icon: PenTool },
];

const folderStructureData: FileTreeItem[] = [
    {
        name: "project-root",
        type: "folder",
        children: [
            { name: "pom.xml", type: "file", comment: "Maven configuration" },
            {
                name: "src",
                type: "folder",
                children: [
                    {
                        name: "main",
                        type: "folder",
                        children: [
                            {
                                name: "java/com/axa/aii",
                                type: "folder",
                                children: [
                                    { name: "Application.java", type: "file", comment: "Main entry point" },
                                    { name: "config", type: "folder", comment: "Configuration classes" },
                                    { name: "controller", type: "folder", comment: "REST controllers" },
                                    { name: "service", type: "folder", comment: "Business logic" },
                                    { name: "repository", type: "folder", comment: "Data access layer" },
                                    { name: "model", type: "folder", comment: "Entity classes" },
                                    { name: "dto", type: "folder", comment: "Data Transfer Objects" },
                                    { name: "exception", type: "folder", comment: "Custom exceptions" }
                                ]
                            },
                            {
                                name: "resources",
                                type: "folder",
                                children: [
                                    { name: "application.yml", type: "file", comment: "Main configuration" },
                                    { name: "application-dev.yml", type: "file", comment: "Dev profile" },
                                    { name: "application-prod.yml", type: "file", comment: "Production profile" }
                                ]
                            }
                        ]
                    },
                    {
                        name: "test",
                        type: "folder",
                        children: [
                            { name: "java", type: "folder", comment: "Test classes" },
                            { name: "resources", type: "folder", comment: "Test configurations" }
                        ]
                    }
                ]
            },
            { name: "target", type: "folder", comment: "Build output (gitignored)" }
        ]
    }
];

const JavaDeveloperGuidelinePage: React.FC = () => {
    const breadcrumbs = [
        { label: 'Home', href: '/' },
        { label: 'Backend Guidelines' },
        { label: 'Java' }
    ];

    return (
        <Layout>
            <PageHero
                title="Java Developer Guideline"
                subtitle="Standardized practices for building robust and scalable backend services using Java, Spring Boot, and Maven at AII."
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
                                Java is used for high-performance, enterprise-grade backend services at AII. We utilize <strong>Spring Boot 3.x</strong> with <strong>Maven</strong> to accelerate development while maintaining the highest code quality standards.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {[
                                { text: "Java 17/21 LTS", icon: Coffee },
                                { text: "Spring Boot 3.x", icon: Zap },
                                { text: "Maven Build Tool", icon: Settings },
                                { text: "PostgreSQL / Oracle", icon: Database },
                                { text: "Spring Security + JWT", icon: Lock },
                                { text: "Micrometer Metrics", icon: Activity },
                            ].map((tech, i) => (
                                <div key={i} className="glass flex items-center gap-3 p-4 rounded-xl border border-border/50">
                                    <tech.icon className="h-5 w-5 text-primary" />
                                    <span className="font-semibold text-sm">{tech.text}</span>
                                </div>
                            ))}
                        </div>

                        {/* New Developer Checklist */}
                        <div className="mt-12 p-8 rounded-3xl bg-orange-500/5 border border-orange-500/10 space-y-6">
                            <div className="flex items-center gap-3 text-orange-500">
                                <div className="p-2 rounded-lg bg-orange-500/10">
                                    <CheckCircle2 className="h-6 w-6" />
                                </div>
                                <h3 className="text-2xl font-bold">New Developer Checklist</h3>
                            </div>
                            <p className="text-muted-foreground">Follow these steps to get your first Java project running at AII:</p>
                            <div className="grid gap-4">
                                {[
                                    { step: "Install JDK", desc: "Download and install JDK 17 or 21 LTS. Verify with: java -version" },
                                    { step: "Install Maven", desc: "Install Apache Maven 3.9+. Verify with: mvn -version" },
                                    { step: "Setup IDE", desc: "Install IntelliJ IDEA Ultimate (preferred) or VS Code with Java extensions." },
                                    { step: "Clone Template", desc: "Clone the AII Spring Boot starter template from the internal repository." },
                                    { step: "Build & Run", desc: "Execute 'mvn spring-boot:run' to start the application locally." },
                                    { step: "Run Tests", desc: "Execute 'mvn test' to verify the baseline project is stable." },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 p-4 rounded-xl border border-border/50 bg-background/50">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500/10 text-orange-500 flex items-center justify-center font-bold text-sm">
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
                            <h2 className="text-4xl font-extrabold tracking-tight">Project Structure (Maven)</h2>
                            <p className="text-lg text-muted-foreground">Standard Maven project layout for all AII Java applications.</p>
                        </div>

                        <FileTree
                            title="Maven Standard Layout"
                            data={folderStructureData}
                        />

                        <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10 space-y-4">
                            <h4 className="font-bold flex items-center gap-2 text-primary"><Layers className="h-5 w-5" /> Layer Responsibilities</h4>
                            <div className="grid md:grid-cols-2 gap-6 text-sm">
                                <div className="space-y-2">
                                    <p><strong>Controller Layer</strong>: REST endpoints, request validation, response mapping.</p>
                                    <p><strong>Service Layer</strong>: Business logic, transaction management, orchestration.</p>
                                </div>
                                <div className="space-y-2">
                                    <p><strong>Repository Layer</strong>: Data access, JPA queries, database operations.</p>
                                    <p><strong>Model/DTO Layer</strong>: Entities for persistence, DTOs for API contracts.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <Separator />

                    {/* Chapter 3: Spring Boot Standards */}
                    <section id="spring-boot" className="scroll-mt-28 space-y-12">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 3</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Spring Boot Standards</h2>
                            <p className="text-lg text-muted-foreground">Core patterns and best practices for Spring Boot development.</p>
                        </div>

                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h4 className="text-xl font-bold flex items-center gap-2"><Zap className="h-5 w-5 text-yellow-500" /> Dependency Injection</h4>
                                <p className="text-sm text-muted-foreground">Always use <strong>Constructor Injection</strong> with Lombok's @RequiredArgsConstructor for cleaner code.</p>
                                <CodeSnippet
                                    language="java"
                                    code={`@Service
@RequiredArgsConstructor
public class UserService {
    
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    
    public User createUser(CreateUserRequest request) {
        // Constructor injection ensures immutability
        // and makes dependencies explicit
        return userRepository.save(
            User.builder()
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .build()
        );
    }
}`}
                                />
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-xl font-bold flex items-center gap-2"><Settings className="h-5 w-5 text-emerald-500" /> Configuration Properties</h4>
                                <p className="text-sm text-muted-foreground">Use <code>@ConfigurationProperties</code> for type-safe configuration binding.</p>
                                <CodeSnippet
                                    language="java"
                                    code={`@Configuration
@ConfigurationProperties(prefix = "app.jwt")
@Validated
public class JwtProperties {
    
    @NotBlank
    private String secret;
    
    @Positive
    private long expirationMs = 86400000; // 24 hours default
    
    // Getters and setters
}`}
                                />
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                                    <p className="text-xs font-bold uppercase text-emerald-600 mb-2">✅ DO</p>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Use constructor injection</li>
                                        <li>• Prefer @ConfigurationProperties</li>
                                        <li>• Use profiles for environments</li>
                                        <li>• Enable actuator endpoints</li>
                                    </ul>
                                </div>
                                <div className="p-5 rounded-xl bg-destructive/5 border border-destructive/20">
                                    <p className="text-xs font-bold uppercase text-destructive mb-2">❌ DON'T</p>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Use @Autowired on fields</li>
                                        <li>• Hardcode configuration values</li>
                                        <li>• Mix @Component with @Bean</li>
                                        <li>• Ignore Spring profiles</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <Separator />

                    {/* Chapter 4: REST API Design */}
                    <section id="rest-api" className="scroll-mt-28 space-y-12">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 4</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">REST API Design</h2>
                            <p className="text-lg text-muted-foreground">Standards for building consistent and maintainable REST APIs.</p>
                        </div>

                        <div className="space-y-8">
                            <CodeSnippet
                                title="Standard Controller Pattern"
                                language="java"
                                code={`@RestController
@RequestMapping("/api/v1/users")
@RequiredArgsConstructor
@Tag(name = "Users", description = "User management endpoints")
public class UserController {

    private final UserService userService;

    @GetMapping
    @Operation(summary = "Get all users with pagination")
    public ResponseEntity<Page<UserResponse>> getUsers(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size) {
        return ResponseEntity.ok(userService.findAll(PageRequest.of(page, size)));
    }

    @GetMapping("/{id}")
    @Operation(summary = "Get user by ID")
    public ResponseEntity<UserResponse> getUser(@PathVariable UUID id) {
        return ResponseEntity.ok(userService.findById(id));
    }

    @PostMapping
    @Operation(summary = "Create a new user")
    public ResponseEntity<UserResponse> createUser(
            @Valid @RequestBody CreateUserRequest request) {
        UserResponse created = userService.create(request);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(created.getId())
                .toUri();
        return ResponseEntity.created(location).body(created);
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update an existing user")
    public ResponseEntity<UserResponse> updateUser(
            @PathVariable UUID id,
            @Valid @RequestBody UpdateUserRequest request) {
        return ResponseEntity.ok(userService.update(id, request));
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Delete a user")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteUser(@PathVariable UUID id) {
        userService.delete(id);
    }
}`}
                            />

                            <div className="p-6 rounded-2xl bg-muted/30 border space-y-4">
                                <h4 className="font-bold">API Naming Conventions</h4>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm">
                                        <thead className="bg-muted text-xs font-bold uppercase text-muted-foreground">
                                            <tr>
                                                <th className="px-4 py-3 text-left">HTTP Method</th>
                                                <th className="px-4 py-3 text-left">Path</th>
                                                <th className="px-4 py-3 text-left">Purpose</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y">
                                            <tr><td className="px-4 py-2 font-mono">GET</td><td className="px-4 py-2">/api/v1/resources</td><td className="px-4 py-2">List all resources</td></tr>
                                            <tr><td className="px-4 py-2 font-mono">GET</td><td className="px-4 py-2">/api/v1/resources/{'{id}'}</td><td className="px-4 py-2">Get single resource</td></tr>
                                            <tr><td className="px-4 py-2 font-mono">POST</td><td className="px-4 py-2">/api/v1/resources</td><td className="px-4 py-2">Create resource</td></tr>
                                            <tr><td className="px-4 py-2 font-mono">PUT</td><td className="px-4 py-2">/api/v1/resources/{'{id}'}</td><td className="px-4 py-2">Update resource</td></tr>
                                            <tr><td className="px-4 py-2 font-mono">DELETE</td><td className="px-4 py-2">/api/v1/resources/{'{id}'}</td><td className="px-4 py-2">Delete resource</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </section>

                    <Separator />

                    {/* Chapter 5: Persistence & Database */}
                    <section id="persistence" className="scroll-mt-28 space-y-12">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 5</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Persistence & Database</h2>
                            <p className="text-lg text-muted-foreground">JPA/Hibernate best practices and database access patterns.</p>
                        </div>

                        <div className="grid grid-cols-1 gap-8">
                            <div className="space-y-4">
                                <h4 className="text-xl font-bold">Entity Design</h4>
                                <CodeSnippet
                                    language="java"
                                    code={`@Entity
@Table(name = "users")
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @Enumerated(EnumType.STRING)
    private UserStatus status = UserStatus.ACTIVE;

    @CreationTimestamp
    private LocalDateTime createdAt;

    @UpdateTimestamp
    private LocalDateTime updatedAt;
}`}
                                />
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-xl font-bold">Repository Pattern</h4>
                                <CodeSnippet
                                    language="java"
                                    code={`public interface UserRepository 
        extends JpaRepository<User, UUID> {

    Optional<User> findByEmail(String email);
    
    boolean existsByEmail(String email);
    
    @Query("""
        SELECT u FROM User u 
        WHERE u.status = :status 
        AND u.createdAt > :since
        """)
    List<User> findActiveUsersSince(
        @Param("status") UserStatus status,
        @Param("since") LocalDateTime since
    );
    
    @Modifying
    @Query("UPDATE User u SET u.status = :status WHERE u.id = :id")
    void updateStatus(@Param("id") UUID id, @Param("status") UserStatus status);
}`}
                                />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-xl font-bold flex items-center gap-2"><Database className="h-5 w-5 text-blue-500" /> Database Migrations (Flyway)</h4>
                            <p className="text-sm text-muted-foreground">Use Flyway for version-controlled database migrations. Place scripts in <code>src/main/resources/db/migration/</code></p>
                            <CodeSnippet
                                title="V1__Create_users_table.sql"
                                language="sql"
                                code={`-- Flyway migration: V1__Create_users_table.sql
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    status VARCHAR(50) NOT NULL DEFAULT 'ACTIVE',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_status ON users(status);`}
                            />
                        </div>
                    </section>

                    <Separator />

                    {/* Chapter 6: Validation & Error Handling */}
                    <section id="validation" className="scroll-mt-28 space-y-12">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 6</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Validation & Error Handling</h2>
                        </div>

                        <div className="grid grid-cols-1 gap-8">
                            <div className="space-y-4">
                                <h4 className="font-bold flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-emerald-500" /> Jakarta Validation</h4>
                                <CodeSnippet
                                    language="java"
                                    code={`public record CreateUserRequest(
    @NotBlank(message = "Email is required")
    @Email(message = "Invalid email format")
    String email,
    
    @NotBlank(message = "Password is required")
    @Size(min = 8, max = 100, 
          message = "Password must be 8-100 characters")
    String password,
    
    @NotNull(message = "Role is required")
    UserRole role
) {}`}
                                />
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-bold flex items-center gap-2"><Bug className="h-5 w-5 text-red-500" /> Global Exception Handler</h4>
                                <CodeSnippet
                                    language="java"
                                    code={`@RestControllerAdvice
@Slf4j
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ProblemDetail> handleNotFound(
            ResourceNotFoundException ex) {
        ProblemDetail problem = ProblemDetail
            .forStatusAndDetail(HttpStatus.NOT_FOUND, ex.getMessage());
        problem.setTitle("Resource Not Found");
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(problem);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ProblemDetail> handleValidation(
            MethodArgumentNotValidException ex) {
        ProblemDetail problem = ProblemDetail
            .forStatusAndDetail(HttpStatus.BAD_REQUEST, "Validation failed");
        problem.setProperty("errors", ex.getBindingResult()
            .getFieldErrors().stream()
            .map(e -> Map.of("field", e.getField(), 
                            "message", e.getDefaultMessage()))
            .toList());
        return ResponseEntity.badRequest().body(problem);
    }
}`}
                                />
                            </div>
                        </div>
                    </section>

                    <Separator />

                    {/* Chapter 7: Testing Guidelines */}
                    <section id="testing" className="scroll-mt-28 space-y-12">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 7</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Testing Guidelines</h2>
                            <p className="text-lg text-muted-foreground">Comprehensive testing with JUnit 5, Mockito, and TestContainers.</p>
                        </div>

                        <div className="space-y-8">
                            <div className="p-6 rounded-2xl bg-muted/30 border space-y-4">
                                <h4 className="font-bold">Test Naming Convention</h4>
                                <p className="text-sm text-muted-foreground">Follow the pattern: <code className="text-primary">methodName_Scenario_ExpectedBehavior</code></p>
                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="outline" className="font-mono text-xs">createUser_ValidRequest_ReturnsCreatedUser</Badge>
                                    <Badge variant="outline" className="font-mono text-xs">findById_NonExistentId_ThrowsNotFoundException</Badge>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-8">
                                <div className="space-y-4">
                                    <h4 className="text-xl font-bold">Unit Testing with Mockito</h4>
                                    <CodeSnippet
                                        language="java"
                                        code={`@ExtendWith(MockitoExtension.class)
class UserServiceTest {

    @Mock
    private UserRepository userRepository;
    
    @InjectMocks
    private UserService userService;

    @Test
    void findById_ExistingUser_ReturnsUser() {
        // Arrange
        UUID userId = UUID.randomUUID();
        User expected = User.builder()
            .id(userId)
            .email("test@example.com")
            .build();
        when(userRepository.findById(userId))
            .thenReturn(Optional.of(expected));

        // Act
        UserResponse result = userService.findById(userId);

        // Assert
        assertThat(result.getEmail()).isEqualTo("test@example.com");
        verify(userRepository).findById(userId);
    }
}`}
                                    />
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-xl font-bold">Integration Testing</h4>
                                    <CodeSnippet
                                        language="java"
                                        code={`@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@Testcontainers
class UserControllerIT {

    @Container
    static PostgreSQLContainer<?> postgres = 
        new PostgreSQLContainer<>("postgres:15-alpine");

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    void createUser_ValidRequest_Returns201() {
        // Arrange
        var request = new CreateUserRequest(
            "test@example.com", "password123", UserRole.USER);

        // Act
        ResponseEntity<UserResponse> response = restTemplate
            .postForEntity("/api/v1/users", request, UserResponse.class);

        // Assert
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.CREATED);
        assertThat(response.getBody()).isNotNull();
        assertThat(response.getBody().getEmail()).isEqualTo("test@example.com");
    }
}`}
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    <Separator />

                    {/* Chapter 8: Logging & Monitoring */}
                    <section id="logging" className="scroll-mt-28 space-y-12">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 8</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Logging & Monitoring</h2>
                        </div>

                        <div className="grid grid-cols-1 gap-8">
                            <Card className="glass shadow-sm">
                                <CardHeader>
                                    <CardTitle className="text-lg flex items-center gap-2">
                                        <Terminal className="h-5 w-5 text-emerald-500" /> Structured Logging
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-sm text-muted-foreground">Use SLF4J with Logback for consistent, structured logging.</p>
                                    <CodeSnippet
                                        language="java"
                                        code={`@Slf4j
@Service
public class UserService {

    public User createUser(CreateUserRequest request) {
        log.info("Creating user with email: {}", request.getEmail());
        
        try {
            User user = userRepository.save(toEntity(request));
            log.info("User created successfully: id={}", user.getId());
            return user;
        } catch (Exception e) {
            log.error("Failed to create user: email={}", 
                request.getEmail(), e);
            throw e;
        }
    }
}`}
                                    />
                                </CardContent>
                            </Card>

                            <Card className="glass shadow-sm">
                                <CardHeader>
                                    <CardTitle className="text-lg flex items-center gap-2">
                                        <Activity className="h-5 w-5 text-blue-500" /> Actuator Endpoints
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-sm text-muted-foreground">Enable Spring Boot Actuator for health checks and metrics.</p>
                                    <CodeSnippet
                                        language="yaml"
                                        code={`# application.yml
management:
  endpoints:
    web:
      exposure:
        include: health,info,metrics,prometheus
  endpoint:
    health:
      show-details: when_authorized
  metrics:
    tags:
      application: \${spring.application.name}`}
                                    />
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <Separator />

                    {/* Chapter 9: Maven Build */}
                    <section id="maven" className="scroll-mt-28 space-y-12">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 9</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Maven Build Configuration</h2>
                            <p className="text-lg text-muted-foreground">Standard Maven pom.xml configuration for AII Java projects.</p>
                        </div>

                        <CodeSnippet
                            title="pom.xml"
                            language="xml"
                            code={`<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 
         https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>3.2.0</version>
        <relativePath/>
    </parent>
    
    <groupId>com.axa.aii</groupId>
    <artifactId>my-service</artifactId>
    <version>1.0.0-SNAPSHOT</version>
    <name>My Service</name>
    
    <properties>
        <java.version>17</java.version>
        <testcontainers.version>1.19.0</testcontainers.version>
    </properties>
    
    <dependencies>
        <!-- Spring Boot Starters -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-jpa</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-validation</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-actuator</artifactId>
        </dependency>
        
        <!-- Database -->
        <dependency>
            <groupId>org.postgresql</groupId>
            <artifactId>postgresql</artifactId>
            <scope>runtime</scope>
        </dependency>
        <dependency>
            <groupId>org.flywaydb</groupId>
            <artifactId>flyway-core</artifactId>
        </dependency>
        
        <!-- Lombok -->
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <optional>true</optional>
        </dependency>
        
        <!-- Testing -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>org.testcontainers</groupId>
            <artifactId>postgresql</artifactId>
            <scope>test</scope>
        </dependency>
    </dependencies>
    
    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
                <configuration>
                    <excludes>
                        <exclude>
                            <groupId>org.projectlombok</groupId>
                            <artifactId>lombok</artifactId>
                        </exclude>
                    </excludes>
                </configuration>
            </plugin>
        </plugins>
    </build>
</project>`}
                        />

                        <div className="p-6 rounded-2xl bg-muted/30 border space-y-4">
                            <h4 className="font-bold">Common Maven Commands</h4>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    { cmd: "mvn clean install", desc: "Build and install to local repo" },
                                    { cmd: "mvn spring-boot:run", desc: "Run application" },
                                    { cmd: "mvn test", desc: "Run unit tests" },
                                    { cmd: "mvn verify", desc: "Run all tests including integration" },
                                    { cmd: "mvn dependency:tree", desc: "Show dependency tree" },
                                    { cmd: "mvn versions:display-dependency-updates", desc: "Check for updates" },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-3 p-3 rounded-lg bg-background border">
                                        <code className="text-xs font-mono text-primary whitespace-nowrap">{item.cmd}</code>
                                        <span className="text-xs text-muted-foreground">{item.desc}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <Separator />

                    {/* Chapter 10: Code Style & Naming */}
                    <section id="naming" className="scroll-mt-28 space-y-8">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 10</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Code Style & Naming Conventions</h2>
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
                                        { el: "Classes", conv: "PascalCase", ex: "UserService" },
                                        { el: "Interfaces", conv: "PascalCase", ex: "UserRepository" },
                                        { el: "Methods", conv: "camelCase", ex: "findByEmail" },
                                        { el: "Variables", conv: "camelCase", ex: "userName" },
                                        { el: "Constants", conv: "SCREAMING_SNAKE_CASE", ex: "MAX_RETRY_COUNT" },
                                        { el: "Packages", conv: "lowercase", ex: "com.axa.aii.service" },
                                        { el: "Enums", conv: "PascalCase", ex: "UserStatus" },
                                        { el: "Enum Values", conv: "SCREAMING_SNAKE_CASE", ex: "ACTIVE, INACTIVE" },
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

                        <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10 flex gap-4">
                            <FileCode className="h-6 w-6 text-primary shrink-0" />
                            <div className="space-y-2">
                                <h4 className="font-bold text-primary">Google Java Style Guide</h4>
                                <p className="text-sm text-muted-foreground">AII follows the Google Java Style Guide. Configure your IDE with the provided Checkstyle configuration file.</p>
                            </div>
                        </div>
                    </section>

                    {/* Conclusion */}
                    <CallToAction
                        description="Following these Java standards ensures your application is robust, secure, and ready for production at AII."
                        primaryAction={{ label: "Maven Build", href: "#maven" }}
                        secondaryAction={{ label: "Naming Rules", href: "#naming" }}
                    />

                </main>

                <OnThisPage chapters={chapters} />
            </div>
        </Layout>
    );
};

export default JavaDeveloperGuidelinePage;
