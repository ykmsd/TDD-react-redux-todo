/* global it, browser, describe, beforeEach */
const { expect } = require('chai');

describe('TodoList App', () => {
  const todoText = 'Get better at testing';
  beforeEach(() => {
    browser.url('http://localhost:3000/');
  });

  it('Should load with the right title', () => {
    const actualTitle = browser.getTitle();
    expect(actualTitle).to.eql('Todo List');
  });

  it('Shout allow me to create a Todo', () => {
    browser.element('.todo-input').setValue(todoText);
    browser.click('.todo-submit');
    const actual = browser.element('.todo-text').getText();

    expect(actual).to.equal(todoText);
  });

  it('Should allow me to delte a Todo', () => {
    browser.element('.todo-input').setValue(todoText);
    browser.click('.todo-submit');
    browser.click('.todo-delete');
    const actual = browser.element('.todo-text');
    expect(actual.state).to.equal('failure');
  });

  it('Should allow me to undelete a Todo', () => {
    browser.element('.todo-input').setValue(todoText);
    browser.click('.todo-submit');
    browser.click('.todo-delete');
    browser.click('.todo-undelete');
    const actual = browser.element('.todo-text');
    expect(actual._status).to.equal(0);
  });
});
