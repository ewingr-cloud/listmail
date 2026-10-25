/** Provider-neutral ports. Concrete implementations must be supplied by the host. */
export interface Identity {
  id: string;
  email: string;
}
export interface IdentityProvider {
  currentUser(): Promise<Identity | null>;
  signIn(): Promise<Identity>;
  signOut(): Promise<void>;
}
export interface RecordStore {
  get<T>(collection: string, id: string): Promise<T | null>;
  list<T>(collection: string, options?: {limit?: number; cursor?: string}): Promise<{items:T[];cursor?:string}>;
  create<T>(collection: string, id: string, value: T): Promise<boolean>;
  update<T>(collection: string, id: string, patch: Partial<T>, expected?: Partial<T>): Promise<boolean>;
}
export interface EmailMessage {
  from: string;
  to: string;
  subject: string;
  text: string;
}
export interface EmailSender {
  send(message: EmailMessage): Promise<{messageId?:string}>;
}
export interface SecretProvider {
  get(name: string): Promise<string | undefined>;
}
export interface Scheduler {
  register(name: string, expression: string, handler: () => Promise<void>): void;
}
export interface Platform {
  identity: IdentityProvider;
  records: RecordStore;
  email: EmailSender;
  secrets: SecretProvider;
  scheduler: Scheduler;
}
