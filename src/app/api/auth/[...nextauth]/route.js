import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const users = [
    {
        id: 1,
        name: "John Doe",
        email: "admin@gmail.com",
        hashedPassword: "$2b$10$/UcVdL4VgcbYbOGrzWexUeyeEOCj6wmH5qRu6dEL2ATwaFk7PzFD2", // hashed version of "pass123"
        role: "admin"
    },
    {
        id: 2,
        name: "Jane Doe",
        email: "jane@example.com",
        hashedPassword: "$2b$10$/UcVdL4VgcbYbOGrzWexUeyeEOCj6wmH5qRu6dEL2ATwaFk7PzFD2",
        role: "user"
    }
];

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            authorize: async (credentials) => {
                const user = users.find((user) => user.email === credentials.email);

                if (user && await bcrypt.compare(credentials.password, user.hashedPassword)) {
                    const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, "arifmannan", { expiresIn: '1h' });
                    return { ...user, token };
                } else {
                    return null;
                }
            },
        }),
    ],
    session: {
        jwt: true,
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.email = user.email;
                token.role = user.role;
            }
            return token;
        },
        async session({ session, token }) {
            session.user.id = token.id;
            session.user.email = token.email;
            session.user.role = token.role;
            return session;
        },
    },
    secret: "arifmannan",
});

export { handler as GET, handler as POST };
