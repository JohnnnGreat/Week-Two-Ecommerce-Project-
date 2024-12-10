import authSwagger, { loginSwagger } from "./docs/auth.swagger";

const swaggerOptions = {
   definition: {
      openapi: "3.0.0",
      info: {
         title: "Week Two E-Commerce Backend Rest API",
         version: "1.0.0",
         description: "API documentation for the Express TypeScript project",
      },
      servers: [
         {
            url: "http://localhost:3000",
            description: "Development server",
         },
      ],
      paths: {},
   },
   apis: ["./src/docs/*.swagger.ts"],
};

swaggerOptions.definition.paths = {
   ...authSwagger,
   ...loginSwagger,
};

export default swaggerOptions;
