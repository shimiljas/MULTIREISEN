import Request from '../Request';

export const generateOTPVerification = params =>
  Request('generate-otp', {method: 'POST', params});

export const verifyOTPVerification = params =>
  Request('verify-otp', {method: 'POST', params});

export const verifyForgotPasswordToken = params =>
  Request('forgot-password-verify', {params, method: 'POST'}, false);

export const generateForgotPasswordToken = params =>
  Request('forgot-password-generate', {params, method: 'POST'}, false);
