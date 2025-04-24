# QR-Based Food Ordering System

## Backend Architecture

![Architecture](/public/architecture.png?raw=true)

The system follows a microservices architecture with:

- **PostgreSQL** database for reliable data storage
- **Next.js** for the frontend application
- **Nest.js** for the backend microservices
- **ElasticSearch** for advanced search capabilities
- **RabbitMQ** for asynchronous communication between services

### Microservices

The application is divided into the following microservices:

1. **API Gateway** - Entry point for all client requests
2. **Auth Service** - Handles user authentication and authorization
3. **Menu Service** - Manages food court menu items and categories
4. **Order Service** - Processes and tracks customer orders
5. **Payment Service** - Handles corporate card transactions
6. **Notification Service** - Sends real-time updates to users

## Technology Stack

- **Frontend**: Next.js, React, Typescript, Tailwind CSS, Shadcn (for ui)
- **Backend**: Nest.js, TypeScript, TypeORM/Prisma
- **Database**: PostgreSQL
- **Search**: ElasticSearch
- **Message Broker**: RabbitMQ
- **Containerization**: Docker
- **Orchestration**: Kubernetes
- **CI/CD**: GitHub Actions / Gitlab Pipelines / Bitbucket pipelines

## Project Structure

```
backend
   common                     # Should be submodule or npm package to contain common types and helpers
   microservices              # Includes all microservices (should be on different repos)
      auth                    # Authentication service
      gateway                 # API Gateway service
      menu                    # Menu management service
      notification            # Notification service
      order                   # Order processing service
      payment                 # Payment handling service
      
frontend
   app                        # App router (pages)
   components                 # Resusable components
      ui                      # Simple ui components
      custom                  # More complex components with BL
   helpers                    # Contains all necessary helpers
      constants               # Includes constants
      enums                   # Enums for type safety
      hooks                   # Custom hooks
      types                   # Common types and interfaces
   services                   # Intergration services (api, localstorage, logging, etc.)
      
```

## Deployment

Deploy should be provided using docker and kubernetes.

## API Documentation

The API Gateway exposes the following main endpoints:

- `/auth/*` - Authentication endpoints
- `/menu/*` - Menu management endpoints
- `/orders/*` - Order processing endpoints
- `/payments/*` - Payment processing endpoints
- `/notifications/*` - Notification endpoints

Detailed documentation should be provided through swagger!
