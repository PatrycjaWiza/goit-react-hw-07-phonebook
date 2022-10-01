const { createAction } = require('@reduxjs/toolkit');

export const addContact = createAction('contacts/addContact');
export const deleteContact = createAction('contacts/deleteContact');
export const addFilter = createAction('contacts/addFilter');
