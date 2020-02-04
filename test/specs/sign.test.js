var assert = require('assert');
 
describe('第一個前端測試程式', function () {
 
  beforeEach(function() {
    browser.pause(5000);
  });
 
  it('登入失敗', function () {
    browser.url('https://demo.keystonejs.com/keystone/signin');
    // 輸入帳號
    $('input[name=email]').setValue('demo@keystonejs.com');
    // 輸入錯誤密碼
    $('input[name=password]').setValue('1234');
    // 按送出按鈕
    $('button[type=submit]').click();
    // 檢查是否出現警告訊息
    $('[data-alert-type=danger]').waitForExist();
    let alertText = $('[data-alert-type=danger]').getText();
    // 警告訊息的文字內容，是否如預期
    assert.equal('The email and password you entered are not valid.', alertText);
  });
 
  it('登入成功', function() {
    // 輸入帳號
    $('input[name=email]').setValue('demo@keystonejs.com');
    // 輸入正確密碼
    $('input[name=password]').setValue('demo');
    // 按送出按鈕
    $('button[type=submit]').click();
    // 檢查是否存在登出連結
    $('[title="Sign Out"]').waitForExist(7000);
  });
 
  it('登出', function() {
    // 點選登出
    $('[title="Sign Out"]').click();
    // 檢查是否出現登出成功的訊息
    $('[data-alert-type=info]').waitForExist();
    let infoText = $('[data-alert-type=info]').getText();
    assert.equal('You have been signed out.', infoText);
  });
});