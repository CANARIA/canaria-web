export class SignUpUsecase {
  constructor() {
    console.log('usecase constructor');
  }

  execute(e) {
    console.log('usecase execute');
    console.log(e.target);
  }
}

export class SignUpUseCaseFactory {
  static create() {
    return new SignUpUsecase();
  }
}
