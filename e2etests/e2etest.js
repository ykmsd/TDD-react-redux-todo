/* global it, browser, describe */
const { expect } = require('chai');

describe('TodoList App', () => {
  it('Should load with the right title', () => {
    browser.url('http://localhost:3000/');
    const actualTitle = browser.getTitle();

    expect(actualTitle).to.eql('Todo List');
  });

  it('Shout allow me to create a Todo', () => {
    const todoText = 'Get better at testing';
    browser.url('http://localhost:3000/');
    browser.element('.todo-input').setValue(todoText);
    browser.click('.todo-submit');
    const actual = browser.element('.todo-text').getText();

    expect(actual).to.equal(todoText);
  });

  it('Should allow me to delte a Todo', () => {
    const todoText = 'Get better at testing';
    browser.url('http://localhost:3000/');
    browser.element('.todo-input').setValue(todoText);
    browser.click('.todo-submit');
    browser.click('.todo-delete');
    const actual = browser.element('.todo-text');

    expect(actual.state).to.equal('failure');
  });
});
