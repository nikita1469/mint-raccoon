// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '@/app/providers/redux/store';
// import { checkAuth } from '@/entities/auth/model/slices';
// import { IAuthState } from '@/entities/auth/model/slices/authSlice';

// const useAuth = () => {
//   const dispatch = useDispatch();

//   const { route, loading, error } = useSelector((state: RootState): IAuthState => state.auth);

//   useEffect(() => {
//     // @ts-ignore
//     dispatch(checkAuth());
//   }, [dispatch]);

//   return { route, loading, error };
// };

// export default useAuth;
