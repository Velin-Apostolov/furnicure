### Features

### General Features
- Product listing with details (title, description, price, and quantity).
- Admin dashboard for product management (edit, delete, deactivate).
- User-friendly shopping cart functionality.

### Payment Integration
- Integrated Stripe for secure payment processing.
- Collection of shipping and billing addresses, user email, and payment details.

### UI/UX
- Responsive design with **Ant Design** and **Tailwind CSS**.

---

## Tech Stack

### Frontend
- **React** (with Vite for development and production builds)
- **Stripe Elements** for payment forms
- **Ant Design** and **Tailwind CSS** for styling

### Backend
- **Node.js** and **Express**
- **Stripe API** for payments
- **MongoDB** and **Mongoose** for product and order storage

### Deployment
- **Frontend**: Deployed on Firebase Hosting
- **Backend**: Deployed on Render.com

---

## Usage

### Admin Features
- Navigate to `/admin` to manage products (username & password -> 'admin').
- Add, edit, or delete products from the admin dashboard.

### User Features
- Browse products and add them to the cart.
- Proceed to checkout to enter payment details and complete the transaction.

---

## Stripe Integration

### Payment Flow
1. Users provide billing and shipping addresses along with email and payment details.
2. Stripe processes payments securely.

### !!! BE is hosted on Render.com's free tier. If the web app has not been accessed in the last 5 minutes, the server 'goes to sleep' and will need some time in order to reactivate, so the app can function normally.
