# Future API integration

The current application is a static React presentation of the LineCourse HTML/CSS mockup. Demonstration content is kept in the converted JSX pages; no request is sent and no authentication state is simulated.

Add API services here only after the Node.js backend contract is confirmed. Do not infer endpoint paths or request/response shapes from the mockup. Keep backend field names unchanged: `User` uses `id`, `name`, `email`, `role`, `isActive`, and `emailVerifiedAt`; course, module, lesson, enrollment, and progress records use the fields specified by the backend.

The existing course routes require authentication and a verified email address. Confirm whether a public catalogue endpoint will be provided before connecting the public catalogue; do not assume the protected course routes are public.
