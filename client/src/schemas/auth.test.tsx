import { SigninSchema } from "./auth";

describe("SigninSchema", () => {
    it("requires username and password", async () => {
        await expect(SigninSchema.validate({ username: "", password: "" })).rejects.toThrow(new Error("Too Short!"));
        await expect(SigninSchema.validate({ username: "test", password: "test" })).resolves.toBeTruthy();
    });
});

describe("SignupSchema", () => {
    it("requires username and password", async () => {
        await expect(SigninSchema.validate({ username: "", password: "" })).rejects.toThrow(new Error("Too Short!"));
        await expect(SigninSchema.validate({ username: "test", password: "test" })).resolves.toBeTruthy();
    });
});
