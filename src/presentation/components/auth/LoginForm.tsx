import { FormProvider, Controller } from "react-hook-form";
import { useLogin } from "../../hooks/useLogin";
import { Button, Input } from "antd";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useState } from "react";

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { methods, onSubmit, isPending, error, data } = useLogin();
  const { control, handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "grid", gap: 8, maxWidth: 360 }}
      >
        <div style={{ marginBottom: "16px" }}>
          <label htmlFor="username">Usuario</label>
          <Controller
            name="username"
            control={control}
            defaultValue=""
            rules={{ required: "Usuario requerido" }}
            render={({ field, fieldState }) => (
              <>
                <Input
                  {...field}
                  prefix={<UserOutlined />}
                  placeholder="Usuario"
                  type="text"
                  status={fieldState.invalid ? "error" : ""}
                />
                {fieldState.error && (
                  <span style={{ color: "red" }}>
                    {fieldState.error.message}
                  </span>
                )}
              </>
            )}
          />
        </div>
        <div style={{ marginBottom: "16px" }}>
          <label htmlFor="password">Contraseña</label>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{ required: "Contraseña requerida" }}
            render={({ field, fieldState }) => (
              <>
                <Input.Password
                  {...field}
                  prefix={<LockOutlined />}
                  placeholder="Contraseña"
                  id="password"
                  type={showPassword ? "text" : "password"}
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                  status={fieldState.invalid ? "error" : ""}
                  onClick={() => setShowPassword(!showPassword)}
                />
                {fieldState.error && (
                  <span style={{ color: "red" }}>
                    {fieldState.error.message}
                  </span>
                )}
              </>
            )}
          />
        </div>

        <Button
          className="bg-primary hover:bg-primary text-white font-bold py-2 px-4 rounded-md transition duration-300 flex items-center"
          htmlType="submit"
          style={{ width: "100%" }}
          disabled={isPending}
        >
          Iniciar sesión
        </Button>

        {error && (
          <p style={{ color: "red" }}>{String((error as any).message)}</p>
        )}
        {data?.ok === false && <p style={{ color: "red" }}>{data.error}</p>}
      </form>
    </FormProvider>
  );
};
