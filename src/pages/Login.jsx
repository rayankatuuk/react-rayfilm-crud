import { useState } from 'react';
import { AuthCard, AuthForm } from '../components';

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
      setTimeout(() => {
      setIsLoading(false);
      alert('Login berhasil! Anda akan dialihkan.');
      window.location.href = '/';
    }, 2000);
  };

  const loginFields = [
    {
      name: 'username',
      type: 'text',
      label: 'Username',
      placeholder: 'Masukkan username',
      required: true
    },
    {
      name: 'password',
      type: 'password',
      label: 'Kata Sandi',
      placeholder: 'Masukkan kata sandi',
      required: true
    }
  ];

  return (
    <AuthCard 
      title="Masuk" 
      subtitle="Selamat datang kembali!"
    >
      <AuthForm
        formData={formData}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
        isLoading={isLoading}
        submitButtonText="Masuk"
        alternateLinkText="Belum punya akun?"
        alternateLinkPath="/register"
        alternateLinkLabel="Daftar"
        showForgotPassword={true}
        showGoogleAuth={true}
        googleAuthText="Masuk dengan Google"
        fields={loginFields}
      />
    </AuthCard>
  );
};

export default LoginPage;
