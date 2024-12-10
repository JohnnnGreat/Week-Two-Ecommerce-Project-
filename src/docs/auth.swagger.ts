const authSwagger = {
   "/api/v1/authentication/register": {
      post: {
         summary: "Register a new user",
         tags: ["Authentication"],
         requestBody: {
            required: true,
            content: {
               "application/json": {
                  schema: {
                     type: "object",
                     properties: {
                        name: { type: "string", example: "John Doe" },
                        email: { type: "string", example: "johndoe@gmail.com" },
                        password: { type: "string", example: "John-2001" },
                     },
                  },
               },
            },
         },
         responses: {
            "200": {
               description: "Register a new user",
               content: {
                  "application/json": {
                     schema: {
                        type: "object",
                        properties: {
                           message: { type: "string", example: "User Registered" },
                           user: {
                              type: "object",
                              properties: {
                                 name: { type: "string", example: "John Doe" },
                                 email: { type: "string", example: "johndoe@gmail.com" },
                              },
                           },
                        },
                     },
                  },
               },
            },
            "400": {
               description: "User Already Registered",
               content: {
                  "application/json": {
                     schema: {
                        type: "object",
                        properties: {
                           message: { type: "string", example: "User Already Registered" },
                        },
                     },
                  },
               },
            },
         },
      },
   },
};

export const loginSwagger = {
   "/api/v1/authentication/login": {
      post: {
         summary: "Login a new user",
         tags: ["Authentication"],
         requestBody: {
            required: true,
            content: {
               "application/json": {
                  schema: {
                     type: "object",
                     properties: {
                        email: { type: "string", example: "johndoe@gmail.com" },
                        password: { type: "string", example: "John-2001" },
                     },
                  },
               },
            },
         },
         responses: {
            "200": {
               description: "Register a new user",
               content: {
                  "application/json": {
                     schema: {
                        type: "object",
                        properties: {
                           message: { type: "string", example: "User Registered" },
                           user: {
                              type: "object",
                              properties: {
                                 name: { type: "string", example: "John Doe" },
                                 email: { type: "string", example: "johndoe@gmail.com" },
                              },
                           },
                        },
                     },
                  },
               },
            },
            "400": {
               description: "User Already Registered",
               content: {
                  "application/json": {
                     schema: {
                        type: "object",
                        properties: {
                           message: { type: "string", example: "User Already Registered" },
                        },
                     },
                  },
               },
            },
         },
      },
   },
};

export default authSwagger;
