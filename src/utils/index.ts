import { DEFAULT_API_VERSION } from '../config';
import { Headers, Options, ValidatedOptions } from '../types';

export const validateOptions = (options?: Options): ValidatedOptions => {
  if (!options || (!options.customBackend && !options.projectId)) {
    throw Error('Missing customBackend or projectId option');
  }

  if (!options.projectId && !options.customBackend) {
    throw Error('Missing param projectId in options');
  }

  if (options.version && !isNaN(options.version)) {
    throw Error('Param version is not a number');
  }

  return {
    customBackend: options.customBackend,
    projectId: options.projectId,
    isTestnet: options.isTestnet,
    version: options.version || DEFAULT_API_VERSION,
  };
};

export const getHeaders = (projectId?: string): Headers | null => {
  if (!projectId) {
    return null;
  }

  return {
    project_id: projectId,
  };
};
