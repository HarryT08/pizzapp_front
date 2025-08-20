import { motion } from "framer-motion";
import { LoginForm } from "../components/auth/LoginForm";
import { Card } from "antd";

const LoginPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <motion.div
        className="flex-1 hidden lg:block"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src="/public/images/banner_login.jpg"
          alt="Login"
          className="object-cover w-full h-screen"
        />
      </motion.div>
      <div className="flex-1 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card style={{ width: "28rem", maxWidth: "28rem" }}>
            <div className="flex justify-center mb-10">
              <img
                src="/imagenes/logo.png"
                alt="Logo de la App"
                style={{ height: "60px" }}
              />
            </div>
            <h2 className="text-3xl font-bold text-center">Bienvenido</h2>
            <p className="text-center mb-4">
              Ingresa sus credenciales para continuar
            </p>
            <LoginForm />
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;
