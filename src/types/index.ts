export interface User {
  id: string;
  name: string;
  email: string;
  role: 'worker' | 'admin';
  points: number;
}

export interface PointTransaction {
  id: string;
  userId: string;
  amount: number;
  type: 'earned' | 'withdrawn';
  status: 'pending' | 'approved' | 'rejected';
  timestamp: string;
  description: string;
}

export interface WithdrawalRequest {
  id: string;
  userId: string;
  amount: number;
  status: 'pending' | 'approved' | 'rejected';
  timestamp: string;
  paymentMethod: {
    type: 'bank' | 'paypal';
    details: Record<string, string>;
  };
}