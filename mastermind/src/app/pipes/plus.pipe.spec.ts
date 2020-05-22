import { PlusPipe } from './plus.pipe';

describe('PlusPipe', () => {
  it('create an instance', () => {
    const pipe = new PlusPipe();
    expect(pipe).toBeTruthy();
  });
  it('adds plus sign to positive number',()=>{
    // setup/fixture
    const pipe = new PlusPipe();
    // call exercise method
    let value : string = pipe.transform(42);
    // verification
    expect(value).toEqual("+42");
    // destroy
  })
  it('adds plus sign to negative number with sign fix',()=>{
    // setup/fixture
    const pipe = new PlusPipe();
    // call exercise method
    let value : string = pipe.transform(-42,true);
    // verification
    expect(value).toEqual("+42");
    // destroy
  })
  it('adds plus sign to negative number without sign fix',()=>{
    // setup/fixture
    const pipe = new PlusPipe();
    // call exercise method
    let value : string = pipe.transform(-42,false);
    // verification
    expect(value).toEqual("+-42");
    // destroy
  })
  it('adds plus sign to zero',()=>{
    // setup/fixture
    const pipe = new PlusPipe();
    // call exercise method
    let value : string = pipe.transform(0);
    // verification
    expect(value).toEqual("0");
    // destroy
  })
});
