# FrontEnd

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.2.

---

## How to Make Changes to the Website

All visible text, labels, descriptions, and content on the website are driven from a single configuration file:

**`src/assets/config.json`**

Edit this file to update any text shown on the site — no code changes required.

### Config Section Reference

| Section in `config.json` | What it controls | Example fields |
|---|---|---|
| `companyName` | Company name shown in navbar & footer | — |
| `backendEndpoint` | Backend API URL | — |
| `navLinks` | Navigation bar links | `label`, `route` |
| `home.heroMotto` | Animated typing text on the home page | Array of strings |
| `home.heroSectionTitle` | Heading above the carousel ("What we specialize in") | — |
| `home.carousel` | Home page carousel slides | `path` (image URL), `label`, `description` |
| `home.homeServices` | Array of service sections on the home page. Add/remove/reorder entries to control what appears. | `title`, `items[]` |
| `home.homeServices[n].title` | Heading for each service section (Service 1, Service 2, etc.) | — |
| `home.homeServices[n].items` | Cards within each service section | `url`, `title`, `alt`, `description`, `link` |
| `services.pageTitle` | Services page heading (desktop) | — |
| `services.pageTitleMobile` | Services page heading (mobile) | — |
| `services.items` | List of offered services | `name`, `description`, `img_url` |
| `contact.pageTitle` | Contact page heading | — |
| `contact.formLabels` | All form labels, validation messages, button text | `name`, `email`, `emailError`, `contactNumber`, `contactNumberError`, `projectDescription`, `chooseDate`, `dateHint`, `chooseCallBackDate`, `resetButton`, `submitButton` |
| `footer.socialMediaText` | Text above social media icons | — |
| `footer.companyEmail` | Email shown in footer | — |
| `footer.companyAddress` | Address shown in footer | — |
| `footer.companyPhoneNumber` | Phone number shown in footer | — |
| `footer.vision` | Company vision/tagline in footer | — |
| `footer.copyright` | Copyright text in footer | — |
| `footer.sections.products` | "Products" section in footer | `title`, `links[].label`, `links[].url` |
| `footer.sections.usefulLinks` | "Useful links" section in footer | `title`, `links[].label`, `links[].url` |
| `footer.sections.contact.title` | "Contact" section heading in footer | — |

### Other Files You May Need to Change

| File | When to change |
|---|---|
| `src/environments/environment.ts` | Change dev environment variables (backend URL, etc.) |
| `src/environments/environment.prod.ts` | Change production environment variables |
| `nginx.conf` | Change Nginx routing or caching behavior |
| `dockerfile` | Change the production Docker build |
| `dockerfile.dev` | Change the development Docker build (hot reload) |
| `docker-compose.yml` | Change container ports, volumes, or environment |

---

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Running with Docker (Hot Reload)

```bash
docker compose up --build
```

App will be available at `http://localhost:4200` with live reload on file changes.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

