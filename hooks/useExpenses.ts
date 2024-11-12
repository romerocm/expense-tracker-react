import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { useFirebase } from '../../context/FirebaseContext';
import { Expense } from '../types/expense';

export const useExpenses = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(true);
  const { database, user } = useFirebase();

  useEffect(() => {
    if (!user) return;

    const expensesRef = ref(database, `users/${user.uid}/expenses`);
    const unsubscribe = onValue(expensesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const expensesArray = Object.entries(data).map(([id, expense]) => ({
          id,
          ...(expense as Omit<Expense, 'id'>)
        }));
        setExpenses(expensesArray);
      } else {
        setExpenses([]);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [database, user]);

  return { expenses, loading };
};
