// @ts-ignore
/* eslint-disable */

/**
 * 该文件为 @umijs/openapi 插件自动生成，请勿随意修改。如需修改请通过配置 config/openapi.ts 进行定制化。
 * */

import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /api/health/database */
export async function healthCheckDatabase(options?: { [key: string]: any }) {
  return request<{
    status?: string;
    info?: Record<string, any>;
    error?: Record<string, any>;
    details?: Record<string, any>;
  }>('/api/health/database', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/health/disk */
export async function healthCheckDisk(options?: { [key: string]: any }) {
  return request<{
    status?: string;
    info?: Record<string, any>;
    error?: Record<string, any>;
    details?: Record<string, any>;
  }>('/api/health/disk', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/health/memory-heap */
export async function healthCheckMemoryHeap(options?: { [key: string]: any }) {
  return request<{
    status?: string;
    info?: Record<string, any>;
    error?: Record<string, any>;
    details?: Record<string, any>;
  }>('/api/health/memory-heap', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/health/memory-rss */
export async function healthCheckMemoryRss(options?: { [key: string]: any }) {
  return request<{
    status?: string;
    info?: Record<string, any>;
    error?: Record<string, any>;
    details?: Record<string, any>;
  }>('/api/health/memory-rss', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/health/network */
export async function healthCheckNetwork(options?: { [key: string]: any }) {
  return request<{
    status?: string;
    info?: Record<string, any>;
    error?: Record<string, any>;
    details?: Record<string, any>;
  }>('/api/health/network', {
    method: 'GET',
    ...(options || {}),
  });
}
