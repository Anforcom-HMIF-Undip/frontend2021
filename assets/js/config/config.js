/**
 * Configurations file for 
 * Anforcom frontend
 */

const local_api = "http://127.0.0.1:8000/api";
const deploy_api = "https://anforcom.com/api";
const local_frontend = "http://127.0.0.1:5500";
const deploy_frontend = "https://cobaanforcom21.netlify.app";

const config = {
    "local_api" : `${local_api}`,
    "local_login" : `${local_api}/auth/login`,
    "local_register" : `${local_api}/auth/register`,
    "local_logout" : `${local_api}/auth/logout`,
    "local_forgot_password" : `${local_api}/auth/forgot-password`,
    "local_reset_password" : `${local_api}/auth/reset-password`,
    "local_user" : `${local_api}/dashboard/me`,
    "local_enroll_lomba": `${local_api}/dashboard/register`,

    "deploy_api" : `${deploy_api}`,
    "deploy_login" : `${deploy_api}/auth/login`,
    "deploy_register" : `${deploy_api}/auth/register`,
    "deploy_logout" : `${deploy_api}/auth/logout`,
    "deploy_forgot_password" : `${deploy_api}/auth/forgot-password`,
    "deploy_reset_password" : `${deploy_api}/auth/reset-password`,
    "deploy_user" : `${deploy_api}/dashboard/me`,
    "deploy_enroll_lomba": `${deploy_api}/dashboard/register`,

    "local_frontend_register" : `${local_frontend}/register.html`,
    "local_frontend_login" : `${local_frontend}/login.html`,
    "local_frontend_dashboard" : `${local_frontend}/dashboard.html`,
    "local_frontend_terdaftar" : `${local_frontend}/terdaftar.html`,
};

export default config;