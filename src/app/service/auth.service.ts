import { Injectable, inject } from '@angular/core';
import { Auth, AuthProvider, GithubAuthProvider, GoogleAuthProvider, UserCredential, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, User } from '@angular/fire/auth';
import { Credential } from '../interfaces/credential';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth: Auth = inject(Auth);
  private http: HttpClient = inject(HttpClient);

   private authStateSubject = new BehaviorSubject<User | null>(null);
   readonly authState$ = this.authStateSubject.asObservable();
 
   constructor() {
     authState(this.auth).subscribe(user => {
       this.authStateSubject.next(user);
     });
   }

  signUpWithEmailAndPassword(credential: Credential): Promise<UserCredential> {
    return createUserWithEmailAndPassword(this.auth, credential.email, credential.password)
  }

  logInWithEmailAndPassword(credential: Credential) {
    return signInWithEmailAndPassword(this.auth, credential.email, credential.password)
  }

  logOut(): Promise<void> {
    return this.auth.signOut();
  }

  signUpWithGoogleProvider(): Promise<UserCredential>{
    const provider = new GoogleAuthProvider();
    return this.callPopUp(provider);
  }

  signUpWithGithubProvider(): Promise<UserCredential>{
    const provider = new GithubAuthProvider();
    return this.callPopUp(provider);
  }

  async callPopUp(provider: AuthProvider): Promise<UserCredential> {
    try{
      const result = await signInWithPopup(this.auth, provider);
      await this.saveUser(result.user);
      return result;
    }catch(error: any){
      return error;
    }
  }

  public saveUser(user: User): Promise<any> {
    const userData = {
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
    };
    return this.http.post('http://localhost:3000/users', userData).toPromise();
  }
}
